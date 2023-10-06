import { validation } from "sanity";

export default {  
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Product Name",
            validation: (Rule) =>Rule.required()
        },

        {
          name: 'category',
          title: 'Category',
          type: 'reference',
          to: [{ type: 'category' }],
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          },
        {
            name: "short_description",
            type: "string",
            title: "Short Description",
            validation: (Rule) =>Rule.required()
        },
        {
            name: "ingredient",
            type: "string",
            title: "Ingredient",
            // validation: (Rule) =>Rule.required(),
        },
        {
            name: "functions",
            type: "array",
            title:  "List Functions",
            validation: (Rule) =>Rule.required(),
            of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'function',
                      title: 'Function',
                      type: 'string',
                    },
                  ],
                },
              ],
        
        },
        {
            name: "imgUrl",
            type: "image",
            title: "Image",
            validation: (Rule) =>Rule.required(),
            options:{
                hotspot: true
            }
        },

        {
            name: "product_story",
            type: "string",
            title: "Product Story",
            validation: (Rule) =>Rule.required()
        },
        {
            name: "price",
            type: "number",
            title: "Price",
            validation: (Rule) =>Rule.required()
        },
        {
            name: "dosage",
            type: "string",
            title: "dosage",
           
        },
        {
            name: "prescription",
            type: "string",
            title: "Prescription",
        },
        {
            name: "advisory",
            type: "string",
            title: "Advisory",
           
        },
        
        
        
    ]


}

