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
      title: 'Published Date',
      name: 'publishedDate',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
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
    // {
    //   title: 'Published Date',
    //   name: 'publishedDate',
    //   type: 'date'
    // },
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
          type: 'block'
      },
      {type: 'image'},
      ]
    },
  ]
}
