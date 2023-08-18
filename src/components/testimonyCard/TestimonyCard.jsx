import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const TestimonyCard = ({ name, star, quote }) => {
  return (
    <div className=" text-center items-center bg-transparent py-4 shadow-md my-8 mx-2">
      <p> {quote } </p>

      <div className="flex justify-center items-center">
        <StarIcon className="w-4 text-orange-300" />
        <StarIcon className="w-4 text-orange-300" />
        <StarIcon className="w-4 text-orange-300" />
        <StarIcon className="w-4 text-orange-300" />
        <StarIcon className="w-4 text-orange-300" />
      </div>
      <h4>{name}</h4>
    </div>
  );
};

export default TestimonyCard;
