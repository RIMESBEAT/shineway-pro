"use client";
import React from 'react'

const Contact = () => {
  return (
    <main>
      
<div className="padding__x">
    <div className="">
        <div className="">
            <h1>Contact Information</h1>
            <p>Fill in valid information in the respective spaces below. All fields are required.</p>
            <div className=" flex items-center gap-4">
<div className="bg-slate-900 flex-1"></div>
<form action="" className='w-full flex-1'>
<div className="block md:flex gap-4 ">
<div className=" flex-1 ">
        <label htmlFor="">First Name *</label>
    <input className='w-full  p-2 outline-none border border-gray-500 rounded-sm' type="text" placeholder="First Name" />

    </div>
    <div className=" flex-1 ">
        <label htmlFor="">Last Name *</label>
    <input className='w-full  p-2 outline-none border border-gray-500 rounded-sm' type="text" placeholder="Last Name" />

    </div>
</div>
<div className="block md:flex gap-4 ">
<div className=" flex-1 ">
        <label htmlFor="">Phone *</label>
    <input className='w-full  p-2 outline-none border border-gray-500 rounded-sm' type="tel" placeholder="Phone" />

    </div>
    <div className=" flex-1 ">
        <label htmlFor="">Subject *</label>
    <input className='w-full  p-2 outline-none border border-gray-500 rounded-sm' type="text" placeholder="Name" />

    </div>
</div>

<div className="block md:flex gap-10 items-center">

<div className="flex-1">
    <label htmlFor="">Message *</label>

    <textarea className='w-full  p-2 outline-none border border-gray-500 rounded-sm' placeholder="Write Your Message"></textarea>

    </div>
</div>
    <div className="">

    <input  type="submit" value="Submit" />
    </div>
   
    
   
    
    
    
   
 
  
</form>
            </div>
        </div>
        <div className="">
            socials
        </div>
    </div>
    <div className=""></div>
</div>
    </main>
  )
}

export default Contact
