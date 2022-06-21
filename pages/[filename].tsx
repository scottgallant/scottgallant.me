import { useTina } from "tinacms/dist/edit-state";
import Link from "next/link";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { Layout } from "../components/Layout";
import { formatDate } from "../utils/helpers";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function Page(props, articles) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });
    if (data && data.pages) {
        return (
            <Layout>
                <div className="max-w-3xl mx-auto sm:px-6 px-6 md:px-0 min-h-screen">
                    <h1 className="font-serif text-gray-800 text-center pb-12">{data.pages.title}</h1>
                    <p className="copy prose-xl text-2xl font-light leading-relaxed text-gray-700 dark:text-gray-300">
                        <TinaMarkdown
                            content={data.pages.text}
                        />
                    </p>
                </div>
            </Layout>
        );
    }
    return (
        <Layout>
            <div>No data</div>
        </Layout>
    );

}

export const getStaticPaths = async () => {
    const client = ExperimentalGetTinaClient();
    const response = await client.pagesConnection();

    const paths = response.data.pagesConnection.edges.map((x) => {
        return { params: { filename: x.node._sys.filename } };
    });

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps = async (ctx) => {
    const client = ExperimentalGetTinaClient();
    const response = await client.pages({
        relativePath: ctx.params.filename + ".mdx",
    });
    const response2 = await client.articleConnection();
    const articles = response2.data.articleConnection.edges;


    return {
        props: {
            ...articles,
            ...response,
        },
    };
};
