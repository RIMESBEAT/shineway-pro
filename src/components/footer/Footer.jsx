
import React from 'react'
import Logo from "../../../public/logo.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { socials } from '@/global/socials'


let date = new Date().getFullYear()
const Footer = () => {
  

  return (
    <div className='padding__x bg-black'>
      <div className="  py-8 block md:flex text-white ">
        <div className="flex-1 ">
          <div className=" flex gap-2 items-center">
         < Image src={Logo} className='w-10 h-10' alt="Logo" />
         <p className='font-bold text-xl uppercase '>Shineway Healthcare</p>
          </div>
          <div className="py-6 mr-0 md:mr-8 ">
            <p className='text-gray-300 text-sm text-left'>SHINEWAY is a Pharmaceutical company which began her operations in the year 1970, Producing over 400 different Pharmaceutical Products. Shineway is known for producing Traditional Chinese Medicine, with seven factories across China, has two Headquarters, situated in Hong Kong and Shjiazhuang, Hebei.</p>
          </div>
        </div>
        <div className=" flex flex-1 justify-between  gap-8 ">
          
          <div className="block">
          <h1 className='text-lg font-bold '>Company</h1>
         <p className='my-2'>
         <Link href='/about'>About Us</Link>
          </p>
          <p className='my-2'>
          <Link href='/contact'>Contact Us</Link>
            </p>
            <p className='my-2'>
          <Link href='/products'>Products</Link>
              </p> 
              <p>
          <Link href='/blog'>Blog</Link>
              </p>
          </div>
          <div className="">
          <h1 className='text-lg font-bold '>
            Connect With Us
          </h1>
          <div className="">

                {
            socials.map((item)=>(
              <Link href={item.link} className=" flex items-center my-3 capitalize gap-2" key={item.id}>
                <p className={`${item.name === "facebook"? "fill-blue-800" : "" }${item.name === "instagram"? "fill-red-500" : "" } ${item.name === "twitter"? "fill-blue-800" : "" }`}>{item.icon}</p>
                <p>{item.name}</p>
              </Link>
            ))
          }
          </div>
      
        </div>
        </div>
      </div>
       <p className='text-white text-center pb-4'>&copy; Shineway Healthcare {date} </p>
    </div>
  )
}

export default Footer