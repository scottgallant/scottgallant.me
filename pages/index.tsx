import Link from "next/link";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { Layout } from "../components/Layout";

export default function Home({ articles }) {
  const featuredArticles = articles.filter((article) => article.node.featured);

  return (
    <Layout>
      <h1 className="text-center">
        Scott Gallant
      </h1>
      <p>
        👋 I'm Scott.  I'm a proud father, I like to bake bread, and I sail a <Link href=""><a href="">small boat</a></Link> around Eastern 🇨🇦. I'm the founder &amp; CEO at <Link href="https://tina.io"><a href="https://tina.io">tina.io</a></Link> where we're redifining web publishing.
      </p>



      <ul className="mt-10">
        {articles.map((article) => (
          <li className="flex items-center" key={article.node._sys.filename}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-7" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
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
