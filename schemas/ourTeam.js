import { validation } from "sanity";

export default {
    name: 'ourTeam',
  type: 'document',
	title: 'Our Team',
    fields:[
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule) =>Rule.required()

      },
      {
        name: 'position',
        type: 'string',
        title: 'Position',
        validation: (Rule) =>Rule.required()

      },
      {
        name: 'imgUrl',
        type: 'image',
        title: 'Image',
        validation: (Rule) =>Rule.required(),
        options:{
          hotspot: true
      }
      },

    ]
}