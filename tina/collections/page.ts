import { Collection } from "tinacms";

export const PageCollection: Collection = {
  name: "page",
  label: "Page",
  path: "content/pages",
  format: "mdx",
  ui: {
    router: () => "/",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: 'string'
    },
  ]
};
