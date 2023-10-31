"use client"
import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../../../env';
import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import Image from 'next/image';
import { urlFor } from '../../../../../sanity/sanity-utils';
import RichTextComponent from '@/components/RichTextComponent/RichTextComponent';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from 'react';

const BlogContent =  ({params: {slug}}) => {

  const [fetchData, setFetchData] = useState([])

  const router = useRouter();

  const goBack = () => {
    router.back();
  };

// useEffect(()=>{
//   const fetchSinglePost = async ()=>{
//      const query = groq`*[_type == 'post' && slug.current == $slug ][0]{
//     title,
//    description,
//    body,
//    "imgUrl":imgUrl.asset->url,
//    slug,
//    _createdAt
//   }`

//   const post = await client.fetch(query, {slug})

//   setFetchData(post)

//   }

//   fetchSinglePost()
 


// }, [slug])
    
useEffect(() => {
  const fetchSinglePost = async () => {
    try {
      const query = groq`*[_type == 'post' && slug.current == $slug][0]{
        title,
        description,
        body,
        "imgUrl": imgUrl.asset->url,
        slug,
        _createdAt
      }`;

      const post = await client.fetch(query, { slug });
      setFetchData(post);
    } catch (error) {
      // Handle errors here, e.g., log or show an error message
      console.error('Error fetching single post:', error);
    }
  };

  fetchSinglePost();
}, [slug]); 

      

  return (
    <div className='padding__x '>
      <button onClick={goBack}>Go Back</button>
    <div className="my-10">
      {/* <h1 className='font-bold text-4xl my-4 '>
        {post.title}
        </h1> */}



    <PortableText value={fetchData.body} components={RichTextComponent} />
      </div> 
    </div>
  )
}

export default BlogContent