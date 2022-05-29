import Link from "next/link";
import { useTina } from "tinacms/dist/edit-state";
import { ExperimentalGetTinaClient } from "../../.tina/__generated__/types";
import { Layout } from "../../components/Layout";

export default function Category({ category, articles }) {
  const { data } = useTina({
    query: category.query,
    variables: category.variables,
    data: category.data,
  });

  return (
    <Layout>
      <h1>Category</h1>
      <dl>
        <dt>Title</dt>
        <dd>{data.category.title}</dd>
        {data.category.description && (
          <>
            <dt>Description</dt>
            <dd>{data.category.description}</dd>
          </>
        )}
      </dl>
      {data.category?.related?.length > 0 && (
        <>
          <h2>Related Categories</h2>
          <ul>
            {data.category.related.map(({ category }) => {
              if (category) {
                return (
                  <li key={`${category.title}`}>
                    <Link href={`/categories/${category._sys.filename}`}>
                      {category.title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </>
      )}
      <h1>Articles by category </h1>
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
  const response = await client.categoryConnection();

  const paths = response.data.categoryConnection.edges.map((x) => {
    return { params: { category: x.node.slug } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const client = ExperimentalGetTinaClient();
  const category = ctx.params.category;

  const categoryResponse = await client.getCategory({
    relativePath: `${category}.md`,
  });
  const articlesResponse = await client.getArticlesByCategory({
    category: ctx.params.category,
  });

  return {
    props: {
      category: categoryResponse,
      articles: articlesResponse.data.articleConnection.edges,
    },
  };
};
