import { TinaFieldInner } from "@tinacms/schema-tools";
import { filenameToLabel } from "../utils";
import { TinaCloudCollection } from "tinacms";

const author: TinaCloudCollection = {
  label: "Author",
  name: "author",
  path: "content/data/authors",
  format: "md",
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
    {
      type: "string",
      label: "Email",
      name: "email",
    },
    {
      type: "string",
      label: "First Name",
      name: "first_name",
    },
    {
      type: "string",
      label: "Twitter",
      name: "twitter",
    },
    {
      type: "string",
      label: "Github",
      name: "github",
    },
    {
      type: "string",
      label: "LinkedIn",
      name: "linkedin",
    },
    {
      type: "string",
      label: "Bio",
      name: "bio",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      label: "Image",
      name: "image",
    },
    {
      type: "string",
      label: "AVIF",
      name: "avif",
    },
    {
      type: "string",
      label: "AVIF Base64",
      name: "avif_base64",
    },
    {
      type: "string",
      label: "Image Base64",
      name: "image_base64",
    },
  ],
};
export default author;

export const authorReferenceField: TinaFieldInner<false> = {
  type: "object",
  label: "Authors",
  name: "authors",
  list: true,
  ui: {
    itemProps: (item) => {
      return {
        label: item.author
          ? filenameToLabel(item.author)
          : "No author selected",
      };
    },
  },
  fields: [
    {
      label: "Author",
      name: "author",
      type: "reference",
      collections: ["author"],
    },
  ],
};
