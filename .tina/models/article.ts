import { TinaCloudCollection } from "tinacms";
import { authorReferenceField } from "./author";
import { categoriesReferenceField } from "./category";

const article: TinaCloudCollection = {
  label: "Article",
  name: "article",
  path: "content/articles",
  format: "mdx",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Slug",
      name: "slug",
    },
    authorReferenceField,
    {
      type: "string",
      label: "Image",
      name: "image",
    },
    {
      type: "datetime",
      label: "Date",
      name: "date",
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
    categoriesReferenceField,
    {
      type: "boolean",
      label: "Featured",
      name: "featured",
    },
    {
      name: "body",
      label: "Body",
      type: "rich-text",
      isBody: true,
      templates: [
        {
          name: "CaptionedImage",
          label: "Img with caption",
          fields: [
            {
              ui: {
                defaultValue:
                  "https://res.cloudinary.com/indysigner/image/upload/v1596441658/checklists-header-opt_dst2qk.png",
              },
              name: "imgUrl",
              label: "Image URL",
              type: "string",
            },
            {
              ui: {
                defaultValue: "This is my caption",
              },
              name: "caption",
              label: "Caption",
              type: "string",
            },
          ],
        },
        {
          name: "PullQuote",
          label: "Pull Quote",
          fields: [
            {
              ui: {
                defaultValue: "This is my quote",
              },
              name: "children",
              label: "Children",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default article;
