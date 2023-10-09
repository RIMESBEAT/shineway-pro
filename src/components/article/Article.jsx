import Image from 'next/image'
import React from 'react'

const Article = ({body, title, imgUrl, _createdAt, description , category}) => {
  return (
    <main>
        
        <div className="block relative ">
            
            <div className="h-64 ">
                <Image src={imgUrl} width={750} height={250} alt={imgUrl} className=' h-full rounded-lg object-cover md:object-center' />
           
            </div>
            <div className="absolute left-0 bottom-0 p-4 py-2 right-0 rounded-b-md backdrop-blur-lg bg-slate-500/70 text-white">
                <h1 className='font-extrabold text-md line-clamp-1 uppercase'> hgffd{title}</h1>
                <p className=' line-clamp-1 my-1 text-sm '>{description}</p>
                <p className='text-sm text-right font-light '>Published Date: {new Date(_createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "2-digit"
                })}</p>
            </div>
            <p className='absolute right-2 top-2 bg-orange-600 p-1 uppercase rounded-md'>{category}</p>
        </div>
        
    </main>
  )
}

export default Article