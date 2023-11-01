"use client"
import React from 'react'
import { getPaginatedPosts, getPost } from '../../../../sanity/sanity-utils';
import Article from '@/components/article/Article';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { client } from '../../../../lib/sanity';
import Aside from '@/components/aside/Aside';
import Image from 'next/image';
import BlogBg from "../../../../public/blogbg.gif"
import { useEffect } from 'react';
import { useState } from 'react';


const BlogPage =  () => {

//  const postData = await getPost()
// const postData = await getPaginatedPosts()


const [posts, setPosts] = useState([]);
const [postData, setPostData] = useState([])
const [totalPages, setTotalPages] = useState(1);
const [currentPage, setCurrentPage] = useState(1);

const pageSize =4; // Set the desired number of items per page

useEffect(()=>{
  const fetchAsideData = async () =>{
    const data = await getPost()
    setPostData(data)
  }

  fetchAsideData()
}, [])


useEffect(() => {
  const fetchPosts = async () => {
    const data = await getPaginatedPosts(currentPage, pageSize);
    setPosts(data);

    // Calculate total pages based on the total number of posts and page size
    const totalPosts = await getPaginatedPosts(1, Number.MAX_SAFE_INTEGER);
    const calculatedTotalPages = Math.ceil(totalPosts.length / pageSize);
    setTotalPages(calculatedTotalPages);
  };

  fetchPosts();
}, [currentPage]);



const handleNextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage((prevPage) => prevPage + 1);
  }
};

const handlePrevPage = () => {
  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};




  return (
    <main className='' >
<div className="aspect-w-16 aspect-h-9">

<Image src={BlogBg} alt='blog banner' priority/>
</div>

<div className="flex padding__x  items-center">
<div className="">

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

<div className='flex justify-between mb-6'>
<button onClick={handlePrevPage} disabled={currentPage === 1} className='bg-red-500 disabled:bg-gray-500 p-1 rounded-sm'>
        Previous Page
      </button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages} className='bg-red-500 disabled:bg-gray-500 p-1 rounded-sm'>
        Next Page
      </button>
    </div>
</div>

    

<div className="flex-[2] hidden lg:flex px-4 my-4">
<Aside  title={postData.title} postData={postData}/>
</div>

    </div>
    
   
    </main>
  )
}

export default BlogPage
