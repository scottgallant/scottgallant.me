
import Link from "next/link";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { Layout } from "../components/Layout";
import { formatDate } from "../utils/helpers";

export default function Home({ articles }) {
  // console.log(articles);
  return (
    <Layout>
      <div className="max-w-3xl mx-auto sm:px-6 px-6 md:px-0 min-h-screen">
        <h1 className="text-gray-800 text-center pb-12">Scott Gallant</h1>
        <p className="copy text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-serif font-normal">
          👋 I'm Scott. I'm a proud father of two from Eastern Canada. I like to bake bread, go on adventures, and make things with my computer. I'm the founder &amp; CEO of <Link href="https://tina.io"><a href="https://tina.io">Tina.io</a></Link> where we're redifining web publishing.
        </p>
        {/* <h2 className="mb-8 mt-12 pb-4 text-2xl border-b-2 text-gray-600 dark:text-gray-300">Posts</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.node._sys.filename}>
              <Link href={`/articles/${article.node._sys.filename}`}>
                <a className="text-lg block  hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md py-2 px-2 ">{article.node.title} &nbsp; <date className="text-gray-400 text-sm italic"> • {formatDate(article.node.date)}</date> </a>
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const client = ExperimentalGetTinaClient();
  const response = await client.articleConnection();
  const articles = response.data.articleConnection.edges;

  return {
    props: {
      articles,
    },
  };
};
