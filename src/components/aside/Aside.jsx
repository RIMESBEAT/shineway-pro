import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../../sanity/sanity-utils'

const Aside = ({category, title, imgUrl, description, createdAt, postData, slug}) => {
  return (
    <main>
<div className="">
    <p className='text-xs'>Whats hot</p>
    <h2 className='font-bold'>Most Recent</h2>

{
    postData?.slice(0, 4).map((item)=>(
        <div className="py-2 " key={item._id}>
{/* <div className="">
    <Image src={urlFor(item.imgUrl).url()} alt={item.title} width={50} height={100} className=' rounded-full'/>
</div> */}
<Link href={`/blog/${item.slug.current}`}>
 <div className="">
    <p className='bg-red-500 w-fit p-1 rounded-sm text-xs font-bold capitalize '>{item.category}</p> 
    <p className=' py-1 text-sm '>{item.title}</p>
    <p className=' line-clamp-2 text-xs'>{item.description}</p>
   </div>

</Link>
          </div>
    ))
}

<div className="">
<h2>Categories</h2>

<div className="flex gap-2">

    {
    postData?.map((item)=>(
        <div className="" key={item._id}>
            <p>{item.category}</p>
        </div>
    ))
}
</div>

</div>
</div>
    </main>
  )
}

export default Aside