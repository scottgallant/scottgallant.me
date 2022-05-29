import Link from "next/link";
import { ExperimentalGetTinaClient } from "../../.tina/__generated__/types";
import { Layout } from "../../components/Layout";

export default function Authors({ authors }) {
  return (
    <Layout>
      <h1>Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.node.slug}>
            <Link href={`/authors/${author.node.slug}`}>
              <a>{author.node.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const client = ExperimentalGetTinaClient();
  const response = await client.authorConnection();

  return {
    props: {
      authors: response.data.authorConnection.edges,
    },
  };
};
