"use client";
import React from 'react'

const Contact = () => {
  return (
    <main className=' '>
      
     

<div className="text-center">
    <h1 className=' text-2xl md:text-4xl'>Contact Us</h1>

    <p>Fill up the form our team will get back to you within 24 hours</p>
</div>


<form action="" className='justify-center flex-col flex items-center py-10 '>
    <div className="block md:flex items-center justify-center gap-8 w-full">
        <div className="">
<label >First Name</label>
<br />
<input type="text" />
        </div>
        <div className="">
        <label >Last Name</label>
        <br />
<input type="text" />
        </div>
    </div>
    <div className="block md:flex items-center justify-center gap-8">
        <div className="flex-1">
<label >Email Address</label>
<br />
<input type="text" />
        </div>
        <div className="flex-1">
        <label >Last Name</label>
        <br />
<input type="text" />
        </div>
    </div>
        <div className="">
           <label > Message Us</label>


<br />
           <textarea className='flex-1' />

        </div>
</form>

<div className="">

</div>
     
        <div className="">
            socials
        </div>

    </main>
  )
}

export default Contact
