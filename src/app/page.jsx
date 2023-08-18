"use client";
import Image from "next/image";
import Link from "next/link";
import Lady from "../../public/lady.png";
import { useEffect, useState } from "react";
import { products } from "@/global/productData";
import ProductCard from "@/components/product card/ProductCard";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { whatMakesUsDiff } from "@/global/whatMakesUsDiff";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import TestimonyCard from "@/components/testimonyCard/TestimonyCard";

export default function Home() {
  const [data, setData] = useState();
  const [difference, setDifference] = useState();
  useEffect(() => {
    setData(products);
  }, []);

  useEffect(() => {
    setDifference(whatMakesUsDiff);
  });

  Aos.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplayspeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-[#eae7e4] padding__x  ">
        <div className="block  md:flex items-center md:pt-10 pt-24 ">
          <div className=" flex-1 md:mr-8 mr-0">
            <h1 className="text-[#552713] text-4xl lg:text-5xl xl:text-6xl md:text-4xl font-extrabold">
              Elevate Your Beauty Journey
            </h1>
            <p className="my-4 font-semibold">
              Your Path to Healthy Nourished Skin Start Here! Reveal Your Best
              Skin with Our Transformative Products
            </p>
            <Link
              href="/"
              className="bg-[#63301b] rounded-md py-2 px-4  text-white"
            >
              Read More
            </Link>
          </div>
          <div className="flex-1 mt-10 md:mt-0">
            <Image src={Lady} alt="Lady " className="" />
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
        <div className="pt-10">
          <h1 className="font-extrabold text-[#63301b] text-2xl text-center mb-10">
            Our Products
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {data?.map((item) => (
              <div className="" key={item.id}>
                <ProductCard
                  imgUrl={item.imgUrl}
                  name={item.name}
                  price={item.price}
                />
              </div>
            ))}
          </div>
          <div className=" flex  items-center justify-center pt-8">
            <Link
              className="border flex  border-[#63301b] py-1 px-4 rounded-md"
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
        <div className="pt-10">
          <h1 className="text-2xl font-extrabold text-[#63301b] text-center py-4">
            What makes Us Different
          </h1>
          <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-4 ">
            {difference?.map((item) => (
              <div className="bg-transparent shadow-md " key={item.id}>
                <Image src={item.imgUrl} alt={item.title} />
                <p className="capitalize px-2 text-[#63301b] font-extrabold text-lg py-3">
                  {item.title}
                </p>
                <p className="px-2 pb-4 font">{item.description}</p>
              </div>
            ))}
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
        <div className="pt-10">
          <h1 className="font-extrabold py-4 text-[#63301b] text-2xl text-center mb-10">
            What You Might Also Like
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {data?.slice(0, 4).map((item) => (
              <div
                className=""
                key={item.id}
                data-aos="slide-right"
                data-aos-delay="30"
              >
                <ProductCard
                  imgUrl={item.imgUrl}
                  name={item.name}
                  price={item.price}
                />
              </div>
            ))}
          </div>
          <div className=" flex  items-center justify-center pt-8">
            <Link
              className="border flex  border-[#63301b] py-1 px-4 rounded-md"
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
        <div className="bg-[#eae7e4] mt-20 block lg:flex items-center pb-8 lg:pb-0">
          <div className="flex-1 " data-aos="slide-right" data-aos-delay="50">
            <Image className="  mx-auto " src={Lady} alt="Lady" />
          </div>
          <div
            className="flex-1 bg-white rounded-md mx-8 py-8 "
            data-aos="slide-left"
            data-aos-delay="50"
          >
            <h1 className="text-2xl text-center  font-extrabold text-[#63301b]">
              About Us
            </h1>
            <p className="px-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              accusamus perferendis voluptas. Similique animi sit, corporis
              facilis optio praesentium vitae sequi consectetur assumenda
              nesciunt perferendis quis cum libero porro sapiente.
            </p>
            <div className=" flex  items-center justify-center pt-8">
              <Link
                className="border flex  border-[#63301b] py-1 px-4 rounded-md"
                href="/about"
              >
                See more
                <ArrowUpRightIcon className="w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="padding__x mb-8"
        data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-once="false"
      >
        <h1 className="mt-20 text-2xl text-center text-[#63301b] font-extrabold ">
          Testimonies
        </h1>
        <div className="">
          <Slider {...settings}>
            {data?.map((item) => (
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
      </section>
    </>
  );
}
