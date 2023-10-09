import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../../../env';
import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import Image from 'next/image';
import { urlFor } from '../../../../../sanity/sanity-utils';
import RichTextComponent from '@/components/RichTextComponent/RichTextComponent';

const BlogContent = async ({params: {slug}}) => {

    const query = groq`*[_type == 'post' && slug.current == $slug ][0]{
           title,
          description,
          body,
          "imgUrl":imgUrl.asset->url,
          slug,
          _createdAt
      }`
    
      const post = await client.fetch(query, {slug})
    

      

  return (
    <div className='padding__x my-8'>BlogContent {post.title}
    <PortableText value={post.body} components={RichTextComponent} />
    </div>
  )
}

export default BlogContent