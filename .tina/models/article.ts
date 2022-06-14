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
      label: "Sub Title",
      name: "subtitle",
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
                  "https://res.cloudinary.com/demo/image/upload/sample.jpg",
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
            {
              ui: {
                alt: "This is my caption",
              },
              name: "alt",
              label: "Image alt text",
              type: "string",
            },
          ],
        },
        {
          name: "Tweet",
          label: "Tweet",
          fields: [
            {
              ui: {
                defaultValue: "1533470815550939136",
              },
              name: "tweetId",
              label: "Tweet ID",
              type: "string",
              description: "Unique number (about 20-digits) at the end of the Tweet URL",
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