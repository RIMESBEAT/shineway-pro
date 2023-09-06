 
import React from "react";
import Golden from "../../../../public/golden.png";
import Image from "next/image";
import { products } from "@/global/productData";
import ProductCard from "@/components/product card/ProductCard";
import { getProjects } from "@/app/api/route";
import Link from "next/link";

const ProductPage = async () => {

  
  const productData =  await getProjects()

  return (
    <main>
      <section className="padding__x bg-orange-500 ">
        <div className=" block  md:flex items-center md:pt-10 pt-24">
          <div className="flex-1 mr-0 md:mr-10">
            <h1 className="text-4xl text-center md:text-start lg:text-5xl xl:text-6xl md:text-4xl font-extrabold text-white">
              The Power of Golden Six
            </h1>
            <p className=" text-center md:text-start font-bold pt-4">
              Improve your Kidney&apos;s Life, Boost Your Immune System, Protect you
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
            <h1 className="text-2xl   font-extrabold">
              Our Products
            </h1>
            <p className="font-bold">
              Our products are{" "}
              <span className=" font-extrabold">100%</span>{" "}
              organic
            </p>
          </div>
          <div className="grid  mb-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 ">
            {productData?.map((item) => (
              <div className="" key={item._id}>
                
                
                <ProductCard
                  
                  imgUrl={item.imgUrl}
                  name={item.name}
                  description={item.short_description}
                  price={item.price}
                  
                />

              </div>
            ))}
          </div>
    
        </div>
      </section>
      

      
    </main>
  );
};

export default ProductPage;
