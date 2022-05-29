import Link from "next/link";
import { useTina } from "tinacms/dist/edit-state";
import { ExperimentalGetTinaClient } from "../../.tina/__generated__/types";
import { Layout } from "../../components/Layout";

export default function Author({ author, articles }) {
  const { data } = useTina({
    query: author.query,
    variables: author.variables,
    data: author.data,
  });

  return (
    <Layout>
      <h1>Author</h1>
      <dl>
        <dt>Name</dt>
        <dd>{data.author.title}</dd>
        <dt>Bio</dt>
        <dd>{data.author.bio || "No Bio"}</dd>
        <dt>Find {data.author.first_name} Elsewhere</dt>
        {data.author.github && (
          <dd>
            <a href={`https://www.github.com/${data.author.github}`}>GitHub</a>
          </dd>
        )}
        {data.author.twitter && (
          <dd>
            <a href={`https://www.twitter.com/${data.author.twitter}`}>
              Twitter
            </a>
          </dd>
        )}
        {data.author.linkedin && (
          <dd>
            <a href={`https://www.linkedin.com/in/${data.author.linkedin}`}>
              LinkedIn
            </a>
          </dd>
        )}
      </dl>
      <h1>Articles by author </h1>
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

export const getStaticPaths = async () => {
  const client = ExperimentalGetTinaClient();
  const response = await client.authorConnection();

  const paths = response.data.authorConnection.edges.map((x) => {
    return { params: { author: x.node.slug } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const client = ExperimentalGetTinaClient();
  const author = ctx.params.author;

  const authorResponse = await client.author({
    relativePath: `${author}.md`,
  });
  const articlesResponse = await client.getArticlesByAuthor({
    author,
  });

  return {
    props: {
      author: authorResponse,
      articles: articlesResponse.data.articleConnection.edges,
    },
  };
};
