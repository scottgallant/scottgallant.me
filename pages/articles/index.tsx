import Link from "next/link";
import { ExperimentalGetTinaClient } from "../../.tina/__generated__/types";
import { Layout } from "../../components/Layout";
import { formatDate } from "../../utils/helpers";

export default function Articles({ articles }) {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto sm:px-6 px-6 md:px-0 min-h-screen">
        <h1 className="text-gray-800 text-center pb-12 font-serif">Articles</h1>
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
