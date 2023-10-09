export default {
    name: 'post_category',
    title: 'Post Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'title',
        type: 'string',
      },
      {
        name:"post",
        type: "array",
        title: "Post",
        of:[{type: "reference", to:[{type: "post"}]}]
      }

    ],
  };