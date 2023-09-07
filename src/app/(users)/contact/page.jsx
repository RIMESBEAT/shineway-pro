"use client";
import Accordion from '@/components/accordion/Accordion';
import { faqsCompany, faqsProducts } from '@/global/faqs';
import React, { useState } from 'react'

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
    <main className='padding__x '>
      
     

<div className="text-center">
    <h1 className=' text-2xl md:text-4xl'>Contact Us</h1>

    <p>Fill up the form our team will get back to you within 24 hours</p>
</div>


<form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

<div className="my-10 pt-20">
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
