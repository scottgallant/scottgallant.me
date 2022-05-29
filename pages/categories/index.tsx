import Link from "next/link";
import { ExperimentalGetTinaClient } from "../../.tina/__generated__/types";
import { Layout } from "../../components/Layout";

export default function Categories({ categories }) {
  return (
    <Layout>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.node.slug}>
            <Link href={`/categories/${category.node.slug}`}>
              <a>{category.node.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const client = ExperimentalGetTinaClient();
  const response = await client.categoryConnection();

  return {
    props: {
      categories: response.data.categoryConnection.edges,
    },
  };
};
