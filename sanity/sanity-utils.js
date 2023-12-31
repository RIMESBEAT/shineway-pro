import {  createClient, groq } from "next-sanity"
import { client } from "../env"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export const urlFor =(source)=> {
  return builder.image(source)
}





export const getProjects = async ()=>(
    await client.fetch(
       groq `*[_type == "product" ]{
            name,
            "imgUrl":imgUrl.asset->url,
            short_description, 
            price,
            slug,
            _id,
            _createdAt
            } `
    )
)


export const getAllProducts = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    return products;
  };
  
  export const getAllCategories = async () => {
 

   const data = await client.fetch(
      groq `*[_type == "category"]{title, "products": *[_type == "product" && references(^._id)]{name, short_description, "imgUrl":imgUrl, slug,}} `
   )

   return data
  };




export const getTeamData = async ()=>(
    await client.fetch(
       groq `*[_type == "ourTeam"] | order(_createdAt asc){
            name,
            "imgUrl":imgUrl.asset->url,
            position, 
            _id,
            _createdAt} `
    )
)


export const getComplan = async ()=>(
    await client.fetch(
       groq `*[_type == "complan"] {
       "pdf_file": pdf_file.asset->url,
           } `, { cachePolicy: 'no-cache' }
    )
)


//  For Aside
export const getPost = async ()=>(
    await client.fetch(
       groq `*[_type == "post" ] | order(_createdAt desc) {
        title,
          description,
          body,
          "imgUrl":imgUrl.asset->url,
          slug,
          category,
          _createdAt,
          _id
      }
      `
      ,
      { cachePolicy: 'no-cache' }
    )
    
)



export const getPaginatedPosts = async (page = 1, pageSize = 10) => (
  await client.fetch(
    groq `*[_type == "post" ] | order(_createdAt desc) {
      title,
      description,
      body,
      "imgUrl": imgUrl.asset->url,
      slug,
      category,
      _createdAt,
      _id
    }
    [${(page - 1) * pageSize}...${page * pageSize - 1}]`,
    { cachePolicy: 'no-cache' }
  )
  
);

