import Link from "next/link";
import { ExperimentalGetTinaClient } from "../../.tina/__generated__/types";
import { Layout } from "../../components/Layout";
import { formatDate } from "../../utils/helpers";

export default function Articles({ articles }) {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto sm:px-6 px-6 md:px-0 min-h-screen">
        <h1 className="text-gray-800 text-center pb-12">Articles</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.node._sys.filename}>
              <Link href={`/articles/${article.node._sys.filename}`}>
                <a className="text-lg block  hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md py-2 px-2 ">{article.node.title} &nbsp; <date className="text-gray-400 text-sm italic"> • {formatDate(article.node.date)}</date> </a>
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
