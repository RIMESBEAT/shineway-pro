import Image from 'next/image'
import React from 'react'

const TeamCard = ({name, imgUrl, position}) => {
  
  return (
    <div className=''>
      <div className="shadow-lg   rounded-lg dark:shadow-md dark:shadow-slate-800 dark:border-gray-300 dark:border  ">
        <div className="h-64">

        <Image src={imgUrl} width={750} height={350} className=' h-full object-top  rounded-lg object-cover ' alt={name} />
        </div>
        <div className=" px-4 py-2 ">
            <h1 className='font-bold py-1 text-[#242f9f] dark:text-white uppercase'>{name}</h1>

            <div className="flex items-center justify-between">

            <p className='font-bold text-sm dark:text-gray-400 line-clamp-1'>{position}</p>
            <p className='text-right font-bold text-lg'>	&#43;</p>
            </div>
      
        </div>
      </div>
    </div>
  )
}

export default TeamCard
