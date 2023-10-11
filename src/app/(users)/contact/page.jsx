"use client";
import Accordion from '@/components/accordion/Accordion';
import { faqsCompany, faqsProducts } from '@/global/faqs';
import { socials } from '@/global/socials';
import Image from 'next/image';
import React, { useState } from 'react'
import ContactImg from '../../../../public/contactUs.png'

const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: '',
        });

      };

  return (
    <main className='padding__x ' id='contact'>
      
     


     <div className="block md:flex  items-center mt-10 pt-10 gap-8">
     <div className="text-center flex-1 ">
    <h1 className=' text-2xl md:text-4xl'>Contact Us</h1>

    <p>Fill up the form our team will get back to you within 24 hours</p>

    {/* <div className="">
{
  socials?.map((item)=>(
    <div className="" key={item.id}>
      <a href={item.link}>
        <Image src={item.icon} alt={item.name} />
        svgh  <s></s>
      </a>
    </div>
  ))
}
    </div> */}
</div>


{/* <form onSubmit={handleSubmit} className='flex-1 backdrop-blur-md bg-opacity-10 bg-gray-900 px-4 py-8 rounded-md dark:bg-gray-400'>
      <div className="flex gap-4">

         <div className=''>
          <label className='text-white dark:text-black ' htmlFor="firstName">First Name:</label>
        
          
            <input
            className='w-full text-gray-300 dark:text-black my-2 bg-gray-950 caret-white py-2 px-3 rounded-md outline-none border-none'
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
    
          
        </div>
        <div>
          <label className='text-white dark:text-black' htmlFor="lastName">Last Name:</label>
          <input
          className='w-full text-gray-300 dark:text-black my-2 bg-gray-950 caret-white py-2 px-3 rounded-md outline-none border-none'
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
       
        <div>
          <label className='text-white dark:text-black' htmlFor="email">Email Address:</label>
          <input
          className='w-full text-gray-300 dark:text-black my-2 bg-gray-950 caret-white py-2 px-3 rounded-md outline-none border-none'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='text-white dark:text-black' htmlFor="phoneNumber">Phone Number:</label>
          <input
          className='w-full text-gray-300 dark:text-black my-2 bg-gray-950 caret-white py-2 px-3 rounded-md outline-none border-none'
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='text-white dark:text-black' htmlFor="message">Message:</label>
          <br />
          <textarea
          className='w-full text-gray-300 dark:text-black my-2 bg-gray-950 caret-white py-2 px-3 rounded-md outline-none border-none'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="justify-center flex ">

        <button className='bg-white px-8 py-2 w-full rounded-md font-extrabold dark:bg-blue-700' type="submit">Submit</button>
        </div>
      </form> */}


     </div>

     <section className="" data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false">
        <div className="mt-10 py-20 ">
          <h1 className="text-2xl font-bold ">Our Offices</h1>
<div className="w-full  md:w-1/2">
      <div className="">
      <Accordion
        title="Ikeja, Lagos"
        content={<div className="bold"> 
        <p>No.5 Owodumi Street,Off Toyin Street
          Opposite Motayo Hospital Ikeja Lagos</p>
          <h4 className=" pt-4 ">Customer Care</h4>
          <p className="py-3"> Airtel: <span className="font-bold">09028712535 </span></p>
       <p className=""> Mtn: <span className="font-bold">07034283680 </span></p>
          </div>
          
        }
      />
      </div>

     <div className="my-4 ">
     <Accordion
        title="Uyo, Akwa Ibom"
        content={<div className="bold"> 
       <p className="text-bold capitalize"> 

        No.41 Idoro Road, opposite Opulent Dynamic Filling Station Uyo
       </p>
       <h4 className=" pt-4 ">Customer Care</h4>
       <p className="py-3"> Airtel: <span className="font-bold">09028712535 </span></p>
       <p className=""> Mtn: <span className="font-bold">07034283680 </span></p>
        </div>}
      />
     </div>
      {/* Add more Accordion components as needed */}
</div>
        </div>
      </section>

<div className="my-10 ">
<h1 className='py-4 font-extrabold text-4xl'>FAQs</h1>

<div className="block md:flex items-start  gap-8 ">
<div className="flex-1 py-10">
    <h1 className='font-bold text-lg'>FAQ&apos;s About Company</h1>
    {
faqsCompany?.map((item)=>(
    <div className="py-4" key={item.id}>
<Accordion
        title={item.question}
        content={<div className=""> 
        <p>{item.answer}</p>
         
          </div>
          
        }
      />
    </div>
))
    }
    </div>
    <div className="flex-1 py-10">
<h1 className='font-bold text-lg '>FAQ&apos;s About Products</h1>
    {
faqsProducts?.map((item)=>(
    <div className="py-4" key={item.id}>
<Accordion
        title={item.question}
        content={<div className="bold"> 
        <p>{item.answer}</p>
         
          </div>
          
        }
      />
    </div>
))
    }
    </div>

</div>
</div>
     
        <div className="">
            socials
        </div>

    </main>
  )
}

export default Contact
