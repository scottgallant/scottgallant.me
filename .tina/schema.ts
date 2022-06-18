import { defineSchema, defineConfig } from "tinacms";
import article from "./models/article";
import author from "./models/author";
import category from "./models/category";
import page from "./models/page";

export default defineSchema({
  collections: [
    article,
    author,
    category,
    page,
  ],
});

// ===============

// Tina config

const branch = "main";
// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  cmsCallback: (cms) => {
    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["article"].includes(collection.name)) {
          return `/articles/${document._sys.filename}`;
        }
        if (["pages"].includes(collection.name)) {
          return `/${document._sys.filename}`;
        }

        return undefined;
      });

      cms.plugins.add(RouteMapping);
    });
    return cms;
  },
  apiURL,
});
