import React from 'react'
import Logo from "../../../public/logo.jpg"
import Image from 'next/image'
const Loading = () => {
  return (
    <div>
        <div className="h-screen w-full flex flex-col justify-center items-center">
<Image src={Logo}  alt='logo loading' className='rotate-center' />
<p className='font-bold'>Loading...</p>
        </div>
    </div>
  )
}

export default Loading