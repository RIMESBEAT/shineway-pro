"use client";
import React, { useEffect, useState } from "react";
import Golden from "../../../../public/golden.png";
import Image from "next/image";
import { products } from "@/global/productData";
import ProductCard from "@/components/product card/ProductCard";
import BannerSm from "@/components/banner/bannerSm";

const page = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(products);
  }, []);
  return (
    <main>
      <section className="padding__x bg-orange-500">
        <div className=" block  md:flex items-center md:pt-10 pt-24">
          <div className="flex-1 mr-0 md:mr-10">
            <h1 className="text-4xl text-center md:text-start lg:text-5xl xl:text-6xl md:text-4xl font-extrabold text-white">
              The Power of Golden Six
            </h1>
            <p className=" text-center md:text-start font-bold pt-4">
              Improve your Kidney's Life, Boost Your Immune System, Protect you
              from Cancer and much More...
            </p>
          </div>
          <div className="flex-1 mt-10 md:mt-0">
            <Image src={Golden} alt="Golden six" priority />
          </div>
        </div>
      </section>
      <section className="padding__x">
        <div className="pt-10">
          <div className="text-center">
            <h1 className="text-2xl text-[#552713]  font-extrabold">
              Our Products
            </h1>
            <p className="font-bold">
              Our products are{" "}
              <span className="text-green-600 font-extrabold">100%</span>{" "}
              organic
            </p>
          </div>
          <div className="grid grid-cols-2 mb-20 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 ">
            {products?.map((item) => (
              <div className="" key={item.id}>
                <ProductCard
                  price={item.price}
                  imgUrl={item.imgUrl}
                  name={item.name}
                />
              </div>
            ))}
          </div>
    
        </div>
      </section>
      

      
    </main>
  );
};

export default page;
