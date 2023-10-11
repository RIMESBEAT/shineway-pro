
import React from 'react'
import { getPost } from '../../../../sanity/sanity-utils';
import Article from '@/components/article/Article';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { client } from '../../../../lib/sanity';
import Aside from '@/components/aside/Aside';


const BlogPage = async () => {

 const postData = await getPost()
  return (
    <main className='padding__x' id='blog'>

<div className="flex  items-center">
    <div className="my-10 flex-[5]  grid grid-cols-1  sm:grid-cols-2 gap-4 rounded-md mb-10">
{
  postData?.map((item)=>(
   <div className=" shadow-lg " key={item._id}>
    <Link href={`blog/${item.slug.current}`} className=" " >
      <Article title={item.title} imgUrl={item.imgUrl} category={item.category} description={item.description} _createdAt={item._createdAt}/>
     
    </Link>
   </div>
   
  ))
}

</div>
<div className="flex-[2] hidden lg:flex px-4">
<Aside  title={postData.title} postData={postData}/>
</div>

    </div>
    </main>
  )
}

export default BlogPage
