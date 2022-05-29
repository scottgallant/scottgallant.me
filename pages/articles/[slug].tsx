import { useTina } from "tinacms/dist/edit-state";
import { ExperimentalGetTinaClient } from "../../.tina/__generated__/types";
import { Layout } from "../../components/Layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { CaptionedImage } from "../../components/mdx-components/captionedImage";
import { PullQuote } from "../../components/mdx-components/pullQuote";

const components = { CaptionedImage, PullQuote };

export default function Article(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout>
      <div>
        <TinaMarkdown components={components} content={data.article.body} />
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
