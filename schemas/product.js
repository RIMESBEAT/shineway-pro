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
            name: "short_description",
            type: "string",
            title: "Short Description",
            validation: (Rule) =>Rule.required()
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
            name: "price",
            type: "number",
            title: "Price",
            validation: (Rule) =>Rule.required()
        },
        {
            name: "dosage",
            type: "string",
            title: "dosage",
            validation: (Rule) =>Rule.required()
        },
        
        
        
    ]


}