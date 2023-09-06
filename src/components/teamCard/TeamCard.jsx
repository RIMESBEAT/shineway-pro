import Image from 'next/image'
import React from 'react'

const TeamCard = ({name, imgUrl, position}) => {
  
  return (
    <div>
      <div className="shadow-lg  rounded-lg dark:shadow-md dark:shadow-slate-800 dark:border-gray-300 dark:border ">
        <Image src={imgUrl} className='h-80 rounded-lg w-full object-cover object-top' alt='name' />
        <div className=" px-4 py-2 ">
            <h1 className='font-bold text-lg py-1 text-[#242f9f] dark:text-white'>{name}</h1>
            <p className='font-bold text-sm dark:text-gray-400'>{position}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
