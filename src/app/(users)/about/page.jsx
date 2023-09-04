"use client"
import React from "react";
import ImgBG from "../../../../public/headoffice.jpg";
import Image from "next/image";
import TeamCard from "@/components/teamCard/TeamCard";
import Jack from "../../../../public/jacksm.png"
import Jason from "../../../../public/jason.png"
import Link from "next/link";
import Accordion from "@/components/accordion/Accordion";



const AboutPage = () => {
 
  return (
    <main>
      <section className=" relative h-auto w-full   flex  items-center justify-center ">
        <Image src={ImgBG} alt="About"  className="h-full w-full  " />

        {/* <div className="absolute padding__x">
          <p className="text-3xl font-extrabold items-center text-orange-500  text-center ">
            Know More About Shineway
          </p>
          <p className="text-5xl font-extrabold items-center text-[#552713]  text-center ">
            Shineway Healthcare
          </p>
        </div> */}
      </section>

      <section className="padding__x " 
      data-aos="fade-up"
      data-aos-delay="30"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      data-aos-once="false"
      
      >
        
        <div className="block min-h-max py-10 lg:flex items-center">
          <div className="flex-1  flex items-center justify-center lg:mr-8 ">
            <Image
            
              src={ImgBG}
              alt="company"
              className="h-full grayscale object-cover rounded-md"
            />
          </div>
          <div className="flex-1"   
           >
            <h2 className="text-3xl  font-extrabold text-[#242f9f] dark:text-white py-4">
              Our story
            </h2>
            <p className=" font-medium text-justify">
            SHINEWAY is a Pharmaceutical company which began her operations in the year 1970, Producing over 400 different Pharmaceutical Products.  Shineway is known for producing Traditional Chinese Medicine, with seven factories across China, has two Headquarters, situated in Hong Kong and Shjiazhuang, Hebei. Having over 15000 employees.  Her first MLM Business started in Africa in the year 2022  which was founded with the aim to empower individuals from all walks of life to achieve financial independence and success with Lagos Nigeria as the headquarters . The inspiration behind our business comes from the founder of SHINEWAY Africa, DR. JIE WANG’s
personal experiences and with the desire to create a platform where Everyone can overcome health and financial obstacles.  The Company Innovative System of Buy One Get One for free on all the products re-ordered after registration, gives her a  tremendous acceptability round Africa and beyond. 
            </p>
          </div>
        </div>
      </section>
      <section className="padding__x" data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 items-baseline justify-start  py-10 ">
          <div data-aos="slide-top"
             data-aos-delay="50" className=" ">
            <h1 className="text-center font-bold  text-2xl text-[#242f9f] dark:text-white mb-10 pt-10">
              Our Mission
            </h1>
            <p className=" font-medium text-justify">
            Our mission is to Make Life better through provision of  a reliable and effective MLM platform that offers opportunities for people to build their own businesses, earn substantial incomes, and create a better future for themselves and their families. We are committed to offering top-notch products and services that bring value to our customers and distributors alike.
            </p>
          </div>
          <div data-aos="slide-bottom"
             data-aos-delay="50" className="">
            <h1 className="text-center font-bold text-2xl text-[#242f9f] dark:text-white mb-10 pt-10">
              Our Vision
            </h1>
            <p className=" font-medium text-justify">
            Our vision is to become the leading MLM company in Africa, recognized for our integrity, innovation, and the success stories of our distributors. We envision a community-driven organization where everyone feels supported and inspired to achieve their goals, fostering an environment of growth and personal development.
            </p>
          </div>
         
        </div>
      </section>
      <section className="mt-10" data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false">
        <div className=" justify-center bg-[#eae7e4] py-6 flex">
          <button className="bg-[#242f9f] rounded-md py-2 px-3 text-lg font-bold text-white text-center">
            Download Our Complan Here
          </button>
        </div>
      </section>

      <section data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false" className="padding__x relative">
      {/* <div className=" absolute top-0 left-0 w-full -z-30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#eae7e4" fill-opacity="1" d="M0,224L40,213.3C80,203,160,181,240,144C320,107,400,53,480,69.3C560,85,640,171,720,192C800,213,880,171,960,154.7C1040,139,1120,149,1200,176C1280,203,1360,245,1400,266.7L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
</svg>
        </div> */}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 items-baseline justify-start  py-10 ">
          <div className=" ">
            <h1 className="text-center font-bold  text-2xl text-[#242f9f] dark:text-white mb-10 pt-10">
              Our Goals
            </h1>
            <p className=" font-medium text-justify">
            1. To empower individuals by providing them with a flexible business model that allows them to achieve financial freedom and control over their own careers. 
            <br/>
2. To deliver exceptional products and services while maintaining the highest standards of quality and customer satisfaction.
<br/>
3. To create a robust and supportive network of distributors, offering training, mentorship, and continuous learning opportunities to facilitate their success through Shineway Academy.
<br/>
4. To expand our global footprint, reaching new markets and enabling people worldwide to benefit from our MLM platform.
<br/>
5. To continuously innovate and adapt to market trends, leveraging technology and industry best practices to stay ahead of the competition.
            </p>
          </div>
          <div className="">
            <h1 className="text-center font-bold text-2xl text-[#242f9f] dark:text-white mb-10 pt-10">
              Our Culture
            </h1>
            <p className=" font-medium text-justify">
            Our company culture is built on the principles of transparency, collaboration, and empowerment. We foster an inclusive and supportive environment where distributors are encouraged to share their experiences, ideas, and successes. We believe in recognizing and rewarding hard work, dedication, and achievements. We also value ethical business practices and always strive to maintain the utmost integrity in all our transactions and operations.
            </p>
          </div>
         
        </div>
      </section>

      
      <section className="padding__x" data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false">

        <div className="">
          <div className=" text-center my-10 text-2xl font-extrabold">
            <h1 className="text-2xl md:text-4xl font-bold text-[#242f9f] dark:text-white mb-10 pt-10">The Amazing Team of Us</h1>
          </div>
          <div className=" block md:flex items-baseline   gap-8">
            <div className="flex-1 my-8 md:my-0 scale-up-center ">

            <TeamCard name="Mr. Jack Wang" position="CEO"  imgUrl={Jack}/>
            </div>
            <div className="flex-1 my-8 md:my-0 scale-up-center">

            <TeamCard name="Mr. Jason Tian" position="Vice Chairman"  imgUrl={Jason}/>
            </div>
          </div>
        </div>
      </section>

      <section className="padding__x" data-aos="fade-up"
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

      <section data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false" className="py-10 letter__bg items-center justify-center flex" >
        <div className="  text-white padding__x">
          <h1 className="text-extrabold text-2xl md:text-4xl text-center">Let Us Keep You Updated</h1>
<p className="py-6 text-sm md:text-lg text-center">Subscribe to Our Newsletter to Stay Updated and notified about Our New Products and Services</p>
          <div className="bg-white py-2 px-3 rounded-md flex">
            <input type="email" className="outline-none py-3 bg-transparent text-black flex-1" placeholder="enter your email" />
            <button className="bg-blue-700 py-3 px-1 rounded-md">Subscribe Now</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
