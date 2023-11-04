'use client'
import React from "react";
import ImgBG from "../../../../public/headoffice.jpg";
import AboutImage from "../../../../public/about.gif";
import Image from "next/image";
import TeamCard from "@/components/teamCard/TeamCard";
import { culture, goals, mission, story, vision } from "@/global/aboutUs";
import { teamData } from "@/global/teamData";
import { useState } from "react";
import TeamModal from "@/components/teamModal/TeamModal";
import Accordion from "@/components/accordion/Accordion";
import { motion } from "framer-motion";


export const metadata = {
  title:"About Page"
}

const AboutPage =  () => {

const [toggle, setToggle]= useState(null)

const openModal = (item) => {
  setToggle(item);
};

const closeModal = () => {
  setToggle(null)
};


  return (
    <main className=" overflow-x-hidden">
      <section className=" ">

      
       <div className="">


        <Image src={AboutImage} alt="shineway lady"  className=" " />
       </div>

       
      </section>

      <div
 className="padding__x " 
      data-aos="fade-up"
      data-aos-delay="30"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      data-aos-once="false"
      
      >
        
        <div className="block min-h-max  py-5 lg:flex items-center">
          <div className="flex-1  flex items-center justify-center lg:mr-8 ">
            <Image
            
              src={ImgBG}
              alt="company"
              className="h-full object-cover rounded-md"
            />
          </div>
          <div className="flex-1"   
           >
            <h2 className="text-3xl pt-20 text-center lg:text-left  font-extrabold text-[#242f9f] dark:text-white py-4">
              Our story
            </h2>
            <p className=" font-medium text-left">
            {story}
            </p>
          </div>
        </div>
      </div>
      <div className="padding__x" data-aos="fade-up">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 items-baseline justify-start  py-10 ">
          <div data-aos="slide-top"
             data-aos-delay="50" className=" ">
            <h1 className="text-center font-bold  text-2xl text-[#242f9f] dark:text-white mb-10 pt-10">
              Our Mission
            </h1>
            <p className=" font-medium text-left">
            {mission}
            </p>
          </div>
          <div data-aos="slide-bottom"
             data-aos-delay="50" className="">
            <h1 className="text-center font-bold text-2xl text-[#242f9f] dark:text-white mb-10 pt-10">
              Our Vision
            </h1>
            <p className=" font-medium text-left">
            {vision}
            </p>
          </div>
         
        </div>
      </div>
   

      <section className="padding__x relative">
      <div className=" absolute top-0 left-0 w-full -z-30 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill='' className="dark:fill-gray-800  fill-gray-300" fillOpacity="1" d="M0,224L40,213.3C80,203,160,181,240,144C320,107,400,53,480,69.3C560,85,640,171,720,192C800,213,880,171,960,154.7C1040,139,1120,149,1200,176C1280,203,1360,245,1400,266.7L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
</svg>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 items-baseline justify-start  py-10 ">
          <div className=" ">
            <h1 className="text-center font-bold  text-2xl text-[#242f9f] dark:text-white mb-10 pt-10">
              Our Goals
            </h1>
           
           {
            goals?.map((item)=>(
              <div className="" key={item.id}>


                <p className="py-2 font-medium text-left" >{item.goal}</p>
              </div>
            ))
           }
    
          </div>
          <div className="">
            <h1 className="text-center font-bold text-2xl text-[#242f9f] dark:text-white mb-10 pt-10">
              Our Culture
            </h1>
            <p className=" font-medium text-left">
           {culture}
            </p>
          </div>
         
        </div>
      </section>

      
      <section className="padding__x" >

        <div className="mb-20">
          <div className=" text-center my-10 text-2xl font-extrabold">
            <h1 className="text-2xl md:text-4xl font-bold text-[#242f9f] dark:text-white mb-10 ">The Amazing Team of Us</h1>
          </div>
          <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center " >
           

            {
              teamData?.map((item)=>(
                <div className="scale-up-center  " key={item.id} onClick={()=>openModal(item)} >


                  <TeamCard name={item.name} position={item.position} imgUrl={item.imgUrl} />

    
                </div>
              ))
            }
            </div>
            
            {
              toggle && <TeamModal item={toggle} closeModal={closeModal} />
            }
         
        </div>
      </section>

      <section className="padding__x">
        <div className=" py-10 ">
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

      {/* <section data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false" className="py-10 letter__bg items-center justify-center flex " >
        <div className="  text-white padding__x">
          <h1 className="text-extrabold text-2xl md:text-4xl text-center">Let Us Keep You Updated</h1>
<p className="py-6 text-sm md:text-lg text-center">Subscribe to Our Newsletter to Stay Updated and notified about Our New Products and Services</p>
          <div className="bg-white  px-2 rounded-md flex">
            <input type="email" className="outline-none py-3 bg-transparent text-black flex-1" placeholder="enter your email" />
            <button className="bg-blue-700 px-1 my-1 rounded-md">Subscribe</button>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default AboutPage;
