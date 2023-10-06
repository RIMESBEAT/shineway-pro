import {  createClient, groq } from "next-sanity"
import { client } from "../env"





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
    const query = '*[_type == "category"]';
    const categories = await client.fetch(query);
    return categories;
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
           } `
    )
)

export const getPost = async ()=>(
    await client.fetch(
       groq `*[_type == "post" ] | order(_createdAt desc) {
        title,
          description,
          body,
          "imgUrl":imgUrl.asset->url,
          slug,
          _createdAt
      }
      `
    )
)