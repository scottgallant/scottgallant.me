import { useTina } from "tinacms/dist/edit-state";
import { ExperimentalGetTinaClient } from "../../.tina/__generated__/types";
import { Layout } from "../../components/Layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { CaptionedImage } from "../../components/mdx-components/captionedImage";
import { PullQuote } from "../../components/mdx-components/pullQuote";
import { Tweet } from "../../components/mdx-components/tweet";
import { formatDate } from "../../utils/helpers";
import Image from 'next/image'


const components = {
  CaptionedImage, PullQuote, Tweet: (props) => {
    // console.log(props)
    return <Tweet tweetId={props.tweetId} />;
  },
};

export default function Article(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout>
      {/* need an if statement here */}
      <div className="h-80 relative ">
        <Image
          src={data.article.image}
          alt="Facebook Vs the Open Web"
          layout='fill'
          objectFit='cover'
        />
      </div>
      <p className="font-sans text-xs text-gray-500">{data.article.imageSource}</p>
      <div className="max-w-3xl mx-auto sm:px-6 px-6 md:px-0">
        <h1 className="text-gray-800 font-serif">{data.article.title}</h1>
        <p className="subtitle text-2xl font-light leading-relaxed text-gray-600 dark:text-gray-300">{data.article.subtitle}</p>
        <p className="font-sans text-xs text-gray-500 dark:text-gray-500"><date>{formatDate(data.article.date)}</date></p>
        <main className=" font-serif mt-10 prose prose-xl text-gray-600 border-gray-200 border-t-2 pt-10 dark:text-white">
          <TinaMarkdown components={components} content={data.article.body} />
        </main>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const client = ExperimentalGetTinaClient();
  const response = await client.articleConnection();

  const paths = response.data.articleConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const client = ExperimentalGetTinaClient();
  const response = await client.getArticle({
    relativePath: ctx.params.slug + ".mdx",
  });

  return {
    props: {
      ...response,
    },
  };
};
