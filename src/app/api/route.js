import {  createClient, groq } from "next-sanity"
import { apiVersion, dataset, projectId, useCdn } from "../../../env";


export const projectClient = createClient({
    apiVersion, dataset, projectId, useCdn 
})

export const getProjects = async ()=>(
    await projectClient.fetch(
       groq `*[_type == "product"]{
            name,
            "imgUrl":imgUrl.asset->url,
            short_description, 
            price,
            slug,
            _id,
            _createdAt} `
    )
)

