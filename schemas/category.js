export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'title',
        type: 'string',
      },
      {
        name:"product",
        type: "array",
        title: "Products",
        of:[{type: "reference", to:[{type: "product"}]}]
      }

    ],
  };