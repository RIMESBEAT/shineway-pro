import Image from "next/image";
import React from "react";

const ProductCard = ({ imgUrl, name, price }) => {
  return (
    <div className="">
      <div className="scale-up-center bg-transparent shadow-md">
        <Image
          src={imgUrl}
          alt={name}
          className="h-64
           object-cover  rounded-t-md"
        />
        <div className="flex py-4 px-2 ">
          <p className="capitalize flex-1 text-[#63301b] font-bold text-sm">
            {name}
          </p>
          <p className=" text-[#63301b] font-bold text-sm">N {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
