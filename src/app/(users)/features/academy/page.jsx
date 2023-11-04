import UseRouter from '@/components/useRouter/useRouter'
import { aboutAcademy, whyShineway } from '@/global/shinewayAcademy'
import Image from 'next/image'
import React from 'react'


export const metadata = {
  title:"Shineway Academy"
}

const page = () => {
  return (
    <main className=''>
      <div className="mb-4 padding__x">

      <UseRouter />
      </div>
<section className="flex items-center justify-center relative">
  <div className="absolute z-10 mx-auto padding__x">
  <h1 className='text-white font-extrabold text-3xl md:text-4xl text-center pb-4'>{aboutAcademy.title}</h1>
  <h1 className='text-white font-extrabold text-lg text-center md:w-1/2  mx-auto'>{aboutAcademy.subTitle}</h1>
  </div>
  <div className="flex-1 w-full h-80 ">
    <Image src={aboutAcademy.imgUrl} className='w-full h-full object-cover'  alt='shineway academy'/>
    {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-800  opacity-90"></div> */}

    <div class="absolute inset-0 bg-blue-900 opacity-80"></div>
  </div>
</section>

<section className='padding__x'>
<h2 className='mt-8 text-2xl font-extrabold'>WHY SHINEWAY ACADEMY?</h2>

<div className="">
  {
    whyShineway?.map((item)=>(
      <div className="my-8" key={item.id}>
        <h2 className='font-bold my-2'>{item.title}</h2>
        <p>{item.discription}</p>
      </div>
    ))
  }
</div>
</section>
    </main>
  )
}

export default page