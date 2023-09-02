import Image from "next/image";
import React from "react";

const ProductCard = ({ imgUrl, name, price, description }) => {
  return (
    <div className="">
      <div className="scale-up-center relative flex-col bg-[white] rounded-md cursor-pointer shadow-md">
        <Image
          src={imgUrl}
          alt={name}
          className="h-64
           object-cover  rounded-t-md"
        />
        <div className="flex pt-4 px-2 ">
          <p className="uppercase flex-1 text-[#242f9f] font-bold text-sm line-clamp-1">
            {name}
          </p>
        </div>
        <div className="p-2">
         <p className="line-clamp-2 text-sm">
         {description}
          </p>
        </div>
          <p className=" text-white bg-[#242f9f]  absolute top-3 rounded-sm right-2 text-center p-1 font-bold text-sm">N {price.toLocaleString()} </p>
      </div>
    </div>
  );
};

export default ProductCard;
