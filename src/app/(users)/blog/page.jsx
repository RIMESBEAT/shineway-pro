
import React from 'react'
import { getPost } from '../../../../sanity/sanity-utils';
import Article from '@/components/article/Article';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { client } from '../../../../lib/sanity';


const BlogPage = async () => {

 const postData = await getPost()
  return (
    <main className='padding__x' id='blog'>
{/* <Link href="/" className='flex items-center gap-3 my-4'>
<ArrowLeftIcon className='w-8 ' />
<span>
  Go to Home
</span>
</Link> */}

    <div className="my-10  grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-md mb-10">
{
  postData?.map((item, index)=>(
   <div className=" shadow-lg" key={index}>
<Link href={`blog/${item.slug.current}`} className=" " >
      <Article title={item.title} imgUrl={item.imgUrl} category={item.category} description={item.description} _createdAt={item._createdAt}/>
     
    </Link>
   </div>
   
  ))
}
    </div>
    </main>
  )
}

export default BlogPage
