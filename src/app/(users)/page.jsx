
import Image from "next/image";
import Link from "next/link";
import Lady from "../../../public/lady.png";
import HappyFamily from "../../../public/happyffam.png";
import { products } from "@/global/productData";
import ProductCard from "@/components/product card/ProductCard";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { whatMakesUsDiff } from "@/global/whatMakesUsDiff";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import TestimonyCard from "@/components/testimonyCard/TestimonyCard";




export default async function  Home() {

  console.log(process.env.CLOUD_NAME);
// const productData = await getProjects()
  
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 4,
  //   slidesToScroll: 2,
  //   initialSlide: 0,
  //   autoplay: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <section className=" padding__x  ">
        <div className="block  md:flex items-center md:pt-10 pt-24 ">
          <div className=" flex-1 md:mr-8 mr-0">
            <h1 className="text__gradient  text-4xl lg:text-5xl xl:text-6xl md:text-4xl font-extrabold">
              Elevate Your Beauty Journey
            </h1>
            <p className="my-4 ">
              Your Path to Healthy Nourished Skin Start Here! Reveal Your Best
              Skin with Our Transformative Products
            </p>
            <Link
              href="/about"
              className="bg-blue-700 rounded-md py-2 px-4  text-white"
            >
              Read More
            </Link>
          </div>
          <div className="flex-1 mt-10 md:mt-0">
            <Image src={HappyFamily} alt="happy family " loading="lazy" className="" />
          </div>
        </div>
      </section>
      <section
        className="relative"
        
      >
      
        <div className="padding__x my-14" data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false">
          <h1 className="font-extrabold   text-2xl py-10 text-center ">
            Our Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* {productData?.slice(0, 3).map((item) => (
              <div className="" key={item._id}>
              <Link href={`/products/${item.slug.current}`}>
              
                <ProductCard
                  imgUrl={item.imgUrl}
                  name={item.name}
                  // price={item.price}
                  description={item.short_description}
                />
              </Link>
              </div>
            ))} */}
          </div>
          <div className=" flex  items-center justify-center pt-10">
            <Link
              className="border border-blue-700 dark:border-white flex   py-1 px-4 rounded-md"
              href="/products"
            >
              See more
              <ArrowUpRightIcon className="w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section
        className="padding__x"
        data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false"
      >
        <div className="pb-20">
          <h1 className="text-2xl font-extrabold  text-center py-20">
            What makes Us Different
          </h1>
          <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-8 items-center justify-between h-full ">
            {whatMakesUsDiff?.map((item) => (
              <div className="bg-transparent scale-up-center shadow-md dark:shadow-md rounded-md dark:shadow-slate-800 dark:border-gray-300 dark:border h-full" key={item.id}>
             

<div className=" h-fit w-2/3  mx-auto">


                <Image src={item.imgUrl} alt={item.title}   className="   pt-4  mx-auto object-cover " />
</div>
      
      <div className=" items-baseline flex-col ">


                <p className="capitalize px-2 text-[#242f9f] text-center dark:text-white  font-extrabold text-2xl py-3">
                  {item.title}
                </p>
                {/* <p className="px-2 pb-4 font dark:text-gray-300">{item.description}</p> */}
      </div>


              </div>
            ))}
          </div>
        </div>
      </section>

      
      
      {/* <section
        className="padding__x my-20"
        data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false"
      >
        <h1 className=" text-2xl text-center  font-extrabold ">
          Testimonies
        </h1>
        <div className="">
          <Slider {...settings}>
            {products?.map((item) => (
              <div className=" " key={item.id}>
                <TestimonyCard
                  name={item.name}
                  quote=" 'Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit Illo,
                velit!' "
                />
              </div>
            ))}
          </Slider>
        </div>
      </section> */}
    </>
  );
}
