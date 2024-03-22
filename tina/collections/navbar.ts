import { Collection } from "tinacms";

export const NavbarCollection: Collection = {
  name: "navbar",
  label: "Navbar",
  path: "content/navbar",
  format: "md",
  ui: {
	allowedActions: {
		create: false,
		delete: false,
	},
	global: true
  },
  fields: [
    {type: 'image', name: 'logo', label: 'Logo'},
    {type: 'object', name: 'links', label: 'Links',list: true, 
    ui: {
      itemProps: (item) => {
        return { label: item.label };
      },
    },
    fields: [
      {type: 'string', name: 'url', label: 'Url'},
      {type: 'string', name: 'label', label: 'Label'},
    ]},
    {type: 'object', name: 'imgLinks', label: 'Image Links', list: true, 
    ui: {
      itemProps: (item) => {
        return { label: item.label };
      },
    },
    fields: [
      {type: 'string', name: 'url', label: 'Url'},
      {type: 'image', name: 'image', label: 'Image'},
      {type: 'string', name: 'label', label: 'Label'},
    ]},

  ],
};
