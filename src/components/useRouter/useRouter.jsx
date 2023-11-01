"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

const UseRouter = () => {

    const router = useRouter();

    const goBack = () => {
      router.back();
    };
  return (
    <div>
        
        <button onClick={goBack} className='flex items-center gap-2 mt-4'><ArrowUturnLeftIcon className='w-6 ' />  Go Back</button>
    </div>
  )
}

export default UseRouter