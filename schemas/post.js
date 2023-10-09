export default  {
  name: 'post',
  type: 'document',
	title: 'Post',
  groups: [
    {
      name: 'meta',
      title: 'Meta',
    },
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    {
      group: 'meta',
      name: 'meta_title',
      type: 'string',
      title: 'Meta Title'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    
    {
      group: 'content',
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      name: 'post_category',
      title: 'Post Category',
      type: 'reference',
      to: [{ type: 'post_category' }],
      validation: (Rule) =>Rule.required()
      
    },
    {
      group: 'content',
      title: 'Image',
      name: 'imgUrl',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        
      ]
    },
    {
      group: 'content',
      title: 'Short Description',
      name: 'description',
      type: 'text'
    },
    {
      title: 'Body Content', 
      name: 'body',
      type: 'array', 
      of: [
        {
          type: 'block',  
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'}
          ]
      },
      {type: 'image'},
      ]
    },
  ]
}
