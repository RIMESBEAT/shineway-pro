import Image from 'next/image'
import React from 'react'

const Article = ({body, title, imgUrl, _createdAt, description}) => {
  return (
    <main>
        
        <div className="block relative sm:flex  gap-4 cursor-pointer">
            
            <div className="h-80 ">
                <Image src={imgUrl} width={750} height={250} alt={imgUrl} className=' h-full rounded-lg object-cover md:object-center' />
            </div>
            <div className="absolute bottom-0 p-4 py-2 right-0 rounded-b-md backdrop-blur-md text-white">
                <h1 className='font-extrabold text-md line-clamp-1'>{title}</h1>
                <p className=' line-clamp-1 my-1 text-sm '>{description}</p>
                <p className='text-sm text-right '>{new Date(_createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "2-digit"

                })}</p>
            </div>
        </div>
    </main>
  )
}

export default Article