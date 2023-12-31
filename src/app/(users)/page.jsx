
import Image from "next/image";
import Link from "next/link";
import Lady from "../../../public/lady.png";
import HappyFamily from "../../../public/happyffam.png";
import ProductCard from "@/components/product card/ProductCard";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { whatMakesUsDiff } from "@/global/whatMakesUsDiff";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import TestimonyCard from "@/components/testimonyCard/TestimonyCard";
import { getProjects } from "../../../sanity/sanity-utils";



export default async function  Home() {

const productData = await getProjects()


  
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
      <section className=" padding__x  " >
        <div className="block  md:flex items-center md:pt-10 pt-24 ">
          <div className=" flex-1 md:mr-8 mr-0">
            <div className="font-bold text-2xl text-blue-900 py-2 dark:text-white">
            Welcome to 
            </div>
            <h1 className="text__gradient uppercase  text-2xl lg:text-5xl xl:text-6xl md:text-4xl font-extrabold">
          Shineway Healthcare
            </h1>
            <p className="my-4 ">
            Let’s take you on an Exquisite journey of a better life, good health, wealth and financial freedom with our exclusive innovation.
            </p>
            <Link
              href="/about"
              className="bg-blue-700 rounded-md py-2 px-4  text-white"
            >
              Read More
            </Link>
          </div>
          <div className="flex-1 mt-10 md:mt-0">
            <Image src={HappyFamily} alt="happy family " priority className="" />
          </div>
        </div>
      </section>
      <section
        className="relative"
        
      >
        <div className=" absolute top-0 left-0 w-full -z-30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="" className="dark:fill-gray-800  fill-gray-300" fillOpacity="1" d="M0,224L40,213.3C80,203,160,181,240,144C320,107,400,53,480,69.3C560,85,640,171,720,192C800,213,880,171,960,154.7C1040,139,1120,149,1200,176C1280,203,1360,245,1400,266.7L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
</svg>
        </div>
        <div className="padding__x my-14" data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false">
          <h1 className="font-extrabold   text-2xl py-10 text-center ">
            Our Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productData?.slice(0, 4).map((item) => (
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
            ))}
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
          <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-8 items-center  ">
          {whatMakesUsDiff?.map((item) => (
              <Link href={item.url} className="bg-transparent scale-up-center shadow-md dark:shadow-md rounded-md dark:shadow-slate-800 dark:border-gray-300 dark:border h-full" key={item.id}>
             

        <div className=" h-fit w-2/3  mx-auto">
                <Image src={item.imgUrl} alt={item.title}   className="   pt-4  mx-auto object-cover h-full " />
          </div>
      
      <div className=" items-baseline flex-col ">

                <p className="capitalize px-2 text-[#242f9f] text-center dark:text-white  font-extrabold text-2xl py-3">
                  {item.title}
                </p>
                {/* <p className="px-2 pb-4 font dark:text-gray-300 line-clamp-2 over">{item.description}</p> */}
      </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <section
        className="padding__x "
        data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false"
      >
        <div className="py-10">
          <h1 className="font-extrabold py-4  text-2xl text-center mb-10">
            What You Might Also Like
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productData?.slice(4,8).map((item) => (
              <div
                className=""
                key={item.id}
                data-aos="slide-right"
                data-aos-delay="30"
              >
                <Link href={`/products/${item.slug.current}`}>
                   <ProductCard
                  imgUrl={item.imgUrl}
                  name={item.name}
                  // price={item.price}
                  description={item.short_description}
                />
                </Link>
             
              </div>
            ))}
          </div>
          <div className=" flex  items-center justify-center pt-8">
            <Link
              className="border flex  border-[#242f9f] dark:border-white py-1 px-4 rounded-md"
              href="/products"
            >
              See more
              <ArrowUpRightIcon className="w-4" />
            </Link>
          </div>
        </div>
      </section> */}
      {/* <section
        className="padding__x "
        data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false"
      >
        <div className="bg-[#eae7e4] rounded-md mt-20 block lg:flex items-center pb-2 lg:pb-0">
          <div className="flex-1 " data-aos="slide-right" data-aos-delay="50">
            <Image className=" h-full mx-auto " src={Lady} alt="Lady" />
          </div>
          <div
            className="flex-1 dark:bg-gray-950 bg-white rounded-md mx-2 md:mx-4 py-8 "
            data-aos="slide-left"
            data-aos-delay="50"
          >
            <h1 className="text-2xl text-center  font-extrabold text-[#242f9f] dark:text-white">
              About Us
            </h1>
            <p className="px-4 md:px-8 text-left  ">
            SHINEWAY is a Pharmaceutical company which began her operations in the year 1970, Producing over 400 different Pharmaceutical Products.  Shineway is known for producing Traditional Chinese Medicine, with seven factories across China, has two Headquarters, situated in Hong Kong and Shjiazhuang, Hebei. 
            </p>
            <div className=" flex  items-center justify-center pt-8">
              <Link
                className="border flex  border-[#242f9f] dark:border-white py-1 px-4 rounded-md"
                href="/about"
              >
                See more
                <ArrowUpRightIcon className="w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}
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
