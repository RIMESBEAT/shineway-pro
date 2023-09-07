import {  createClient, groq } from "next-sanity"
import { apiVersion, dataset, projectId, useCdn } from "../env";


export const projectClient = {apiVersion, dataset, projectId, useCdn}

export const getProjects = async ()=>(
    await createClient(projectClient).fetch(
       groq `*[_type == "product"]{
            name,
            "imgUrl":imgUrl.asset->url,
            short_description, 
            price,
            _id,
            _createdAt} `
    )
)
export const getTeamData = async ()=>(
    await createClient(projectClient).fetch(
       groq `*[_type == "ourTeam"] | order(publishedDate desc){
            name,
            "imgUrl":imgUrl.asset->url,
            position, 
            _id,
            _createdAt} `
    )
)
export const getComplan = async ()=>(
    await createClient(projectClient).fetch(
       groq `*[_type == "complan"] | order(publishedDate asc){
       "pdf_file": pdf_file.asset->url,
           } `
    )
)
