import { TinaFieldInner } from "@tinacms/schema-tools";
import { TinaCloudCollection } from "tinacms";
import { filenameToLabel } from "../utils";

const category: TinaCloudCollection = {
  label: "Category",
  name: "category",
  path: "content/data/categories",
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
      type: "object",
      label: "Related Categories",
      name: "related",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.category
              ? filenameToLabel(item.category)
              : "No category selected",
          };
        },
      },
      fields: [
        {
          label: "Category",
          name: "category",
          type: "reference",
          collections: ["category"],
        },
      ],
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
  ],
};
export default category;

export const categoriesReferenceField: TinaFieldInner<false> = {
  type: "object",
  label: "Categories",
  name: "categories",
  list: true,
  ui: {
    itemProps: (item) => {
      return {
        label: item.category
          ? filenameToLabel(item.category)
          : "No category selected",
      };
    },
  },
  fields: [
    {
      label: "Category",
      name: "category",
      type: "reference",
      collections: ["category"],
    },
  ],
};
