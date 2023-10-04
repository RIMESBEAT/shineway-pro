import Link from 'next/link'
import React from 'react'

const Studio = () => {
  return (
    <div className='min-h-screen '>
        
        <h1 className='font-bold text-3xl text-center mt-10'> Welcome to Shineway  Studio
            </h1>
    
    <p className='text-center '>What do you want to post today?

    </p>
<div className="max-w-md border-gray-500 border-2 shadow-lg rounded-lg shadow-gray-400 justify-center items-center flex flex-col mx-auto my-10 bg-transparent py-20 ">


<div className=" my-8 ">

    <Link href='/studio/postBlog' className='bg-pink-500 font-bold p-4 rounded-md shadow-md drop-shadow-lg'>Write Blog Post</Link>
</div>

<div className=" my-8">


    <Link href='/studio/postProduct' className='bg-pink-800 font-bold p-4 rounded-md'>Write Product Post</Link>
</div>

<div className="my-8">

    <Link href='/studio/postComplan' className='bg-blue-900 font-bold p-4 rounded-md'>Update Complan Post</Link>
</div>

<p>No Post Today?</p>

<div className="">
    <Link href='/' className='bg-red-500'>Go To Home</Link>
</div>

</div>


    </div>
  )
}

export default Studio