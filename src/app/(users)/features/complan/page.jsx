import { innovativePlan, innovativePlanBrief } from '@/global/businessPlan'
import Image from 'next/image'
import React from 'react'
import BgImage from "../../../../../public/business.jpg"
import { getComplan } from '../../../../../sanity/sanity-utils'
import { client } from '../../../../../env'
import { groq } from 'next-sanity'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
// import { motion } from 'framer-motion'


const BusinessPlan =async () => {

 const complanFile = await client.fetch(
  groq `*[_type == "complan"] {
  "pdf_file": pdf_file.asset->url,
      } `
)


  return (
    <main>
      <section className="flex items-center justify-center relative">
  <div className="absolute z-10 mx-auto padding__x">
  <h1 className='text-white font-extrabold text-3xl md:text-4xl text-center pb-4'>{innovativePlanBrief.title}</h1>
  <h1 className='text-white font-extrabold text-lg text-center   mx-auto'>{innovativePlanBrief.subtitle}</h1>
  </div>
  <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} className="flex-1 w-full h-80 ">
    <Image src={BgImage} className='w-full h-full object-cover'  alt='shineway academy'/>
    {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-800  opacity-90"></div> */}

    <div class="absolute inset-0 bg-blue-900 opacity-80"></div>
  </motion.div>
</section>

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} className="padding__x">
  {
    innovativePlan?.map((item)=>(
      <div className="my-8" key={item.id}>
        <h2 className='font-bold my-2'>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    ))
  }
</motion.div>


   <section className="mt-10" data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false">
        <div className=" justify-center  py-6 flex mb-8">
          <a target="_blank" href={`${complanFile[0].pdf_file}?dl=`} className="bg-[#242f9f] shake-horizontal flex items-center rounded-md py-2 px-3 text-lg font-bold text-white text-center">
          <span>
            <ArrowDownIcon className='w-7' />
            </span>  Download Our Complan Here
          </a>
        </div>
      </section>
    </main>
  )
}

export default BusinessPlan