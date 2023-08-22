import React from "react";
import ImgBG from "../../../public/headoffice.jpg";
import Image from "next/image";
import Vision from "../../../public/vission.png";
import Mission from "../../../public/mission.png";

const page = () => {
  return (
    <main>
      <section className=" relative h-[60vh] w-full  padding__x  flex bg-[#eae7e4] items-center justify-center ">
        <Image src={ImgBG} alt="About" className="h-full w-full grayscale  object-cover" />

        {/* <div className="absolute padding__x">
          <p className="text-3xl font-extrabold items-center text-orange-500  text-center ">
            Know More About Shineway
          </p>
          <p className="text-5xl font-extrabold items-center text-[#552713]  text-center ">
            Shineway Healthcare
          </p>
        </div> */}
      </section>

      <section className="padding__x">
        <div className="block min-h-max py-10 lg:flex items-center">
          <div className="flex-1  flex items-center justify-center lg:mr-8 ">
            <Image
              src={ImgBG}
              alt="company"
              className="h-full object-cover rounded-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-[#552713] py-8">
              Our story
            </h2>
            <p className=" font-medium text-justify">
              Lorem ipsum dolor sit amet consectetur adipisi cing elit. Vitae
              quo optio, deserunt eius, iusto vel qui dolore magnam rerum
              dolorem aliquid. Minima tenetur aliquam explicabo. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Minus, facilis?
              Perferendis quos assumenda mollitia, inventore, vel aliquam
              pariatur cumque dolore, necessitatibus cupiditate repellat
              molestias debitis iusto reiciendis ab deleniti libero rerum! Quis
              beatae reprehenderit quam minus culpa dolorum ipsa possimus!
            </p>
          </div>
        </div>
      </section>
      <section className="padding__x">
        <div className="block md:flex  items-center  py-10 ">
          <div className="flex-1 mb-8 md:mr-5 md:mb-0">
            <h1 className="text-center font-bold  text-2xl text-[#552713]">
              Our Mission
            </h1>
            <p className=" font-medium text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              velit quisquam quibusdam voluptate, repudiandae tempora iste est,
              accusamus inventore soluta natus nemo? Quae atque cum beatae quam
              dignissimos explicabo odio.
            </p>
          </div>
          <div className="flex-1">
            <h1 className="text-center font-bold text-2xl text-[#552713]">
              Our Vision
            </h1>
            <p className=" font-medium text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              velit quisquam quibusdam voluptate, repudiandae tempora iste est,
              accusamus inventore soluta natus nemo? Quae atque cum beatae quam
              dignissimos explicabo odio.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className=" justify-center bg-[#eae7e4] py-6 flex">
          <button className="bg-[#552713] rounded-md py-2 px-3 text-lg font-bold text-white text-center">
            Download Our Complan Here
          </button>
        </div>
      </section>

      <section>

        <div className="">
          <div className="">
            <h1>Our Team</h1>
          </div>
          <div className=""></div>
        </div>
      </section>
    </main>
  );
};

export default page;
