import { TinaFieldInner } from "@tinacms/schema-tools";
import { TinaCloudCollection } from "tinacms";

const page: TinaCloudCollection = {
  label: "Pages",
  name: "pages",
  path: "content/pages",
  format: "mdx",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true,
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
      isBody: false,
    },
  ],
};
export default page;