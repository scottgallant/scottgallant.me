import Link from "next/link";
import { ExperimentalGetTinaClient } from "../../.tina/__generated__/types";
import { Layout } from "../../components/Layout";

export default function Articles({ articles }) {
  return (
    <Layout>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.node._sys.filename}>
            <Link href={`/articles/${article.node._sys.filename}`}>
              <a>{article.node.title}</a>
            </Link>
          </li>
        ))}
      </ul>
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
