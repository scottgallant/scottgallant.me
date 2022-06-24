import { TinaFieldInner } from "@tinacms/schema-tools";
import { TinaCloudCollection } from "tinacms";

const global: TinaCloudCollection = {
  label: "Global Settings",
  name: "global",
  path: "content/global",
  format: "json",
  fields: [
    {
      type: "object",
      label: "Navigation",
      name: "header",
      fields: [
        {
          type: "object",
          label: "Nav Links",
          name: "nav",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.label };
            },
            defaultItem: {
              href: "home",
              label: "Home",
            },
          },
          fields: [
            {
              type: "string",
              label: "Link",
              name: "href",
            },
            {
              type: "string",
              label: "Label",
              name: "label",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Footer",
      name: "footer",
      fields: [
        {
          type: "object",
          label: "Social Links",
          name: "social",
          fields: [
            {
              type: "string",
              label: "Facebook",
              name: "facebook",
            },
            {
              type: "string",
              label: "Twitter",
              name: "twitter",
            },
            {
              type: "string",
              label: "Instagram",
              name: "instagram",
            },
            {
              type: "string",
              label: "Github",
              name: "github",
            },
          ],
        },
        {
          type: "object",
          label: "Newsletter",
          name: "newsetter",
          fields: [
            {
              type: "boolean",
              label: "Show Newsletter (coming soon)",
              name: "enable",
              description: "Note: this is not currently available",
            },
          ],
        },
      ],
    },
  ],
}
export default global;