
import Link from "next/link";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { Layout } from "../components/Layout";
import { formatDate } from "../utils/helpers";

export default function Home({ articles }) {
  // console.log(articles);
  return (
    <Layout>
      <div className="max-w-3xl mx-auto sm:px-6 px-6 md:px-0 min-h-screen">
        <h1 className="font-serif text-gray-800 text-center pb-12">Scott Gallant</h1>
        <p className="copy prose-xl text-2xl font-light leading-relaxed text-gray-700 dark:text-gray-300">
          👋 I'm Scott. I'm a proud father living in Eastern Canada. I like baking bread, going on adventures, and making things with my computer. I'm the founder & CEO of Tina.io where we're redefining web publishing.
        </p>
      </div>
      <h2 className="mb-8 mt-12 pb-4 text-2xl border-b-2 text-gray-600 dark:text-gray-300">Articles</h2>
      <div className="max-w-2xl mx-auto sm:px-6 px-6 md:px-0 min-h-screen">
        <ul>
          {articles.map((article) => (
            <li key={article.node._sys.filename} className="mb-4">
              <Link href={`/articles/${article.node._sys.filename}`}>
                <a className="block hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md p-5"><span className="font-serif text-2xl">{article.node.title}</span> &nbsp;
                  <time className="text-gray-400 text-sm italic float-right font-sans"> {formatDate(article.node.advanced.date)}</time>
                  <br /><span className="text-md font-light">{article.node.subtitle}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
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
