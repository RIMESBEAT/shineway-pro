
import React from 'react'
import { getPost } from '../../../../sanity/sanity-utils';
import Article from '@/components/article/Article';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';


const BlogPage = async () => {

 const postData = await getPost()

 console.log(postData);

  return (
    <main className='padding__x' id='blog'>
{/* <Link href="/" className='flex items-center gap-3 my-4'>
<ArrowLeftIcon className='w-8 ' />
<span>
  Go to Home
</span>
</Link> */}

    <div className="my-10  grid  grid-cols-1 md:grid-cols-2 gap-4 rounded-md mb-10">
{
  postData?.map((item)=>(
   <div className=" shadow-lg" key={item._id}>
<Link href={`blog/${item.slug.current}`} className=" " >
      <Article title={item.title} imgUrl={item.imgUrl} description={item.description} _createdAt={item._createdAt}/>
     
    </Link>
   </div>
   
  ))
}
    </div>
    </main>
  )
}

export default BlogPage
