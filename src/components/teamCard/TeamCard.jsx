'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'

const TeamCard = ({name, imgUrl, position}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // This code will only execute on the client-side
      const title = document.querySelector('title');
      title.innerText = 'Updated Title';
    }
  }, []);
  return (
    <div>
      <div className="shadow-lg rounded-lg">
        <Image src={imgUrl} className='h-80 rounded-lg w-full object-cover object-top' alt='name' />
        <div className=" px-4 py-2 ">
            <h1 className='font-bold text-lg py-1 text-[#242f9f]'>{name}</h1>
            <p className='font-bold text-sm'>{position}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
