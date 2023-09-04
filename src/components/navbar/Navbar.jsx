"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/logo.jpg";
import Link from "next/link";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import ThemeButton from "../themeProvider/ThemeButton";

const menu = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  {
    id: 2,
    title: "about us",
    url: "/about",
  },
  {
    id: 3,
    title: "products",
    url: "/products",
  },
  {
    id: 4,
    title: "blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "contact us",
    url: "/contact",
  },
];

const Navbar = () => {

  const handleClick = () => {
    // Focus on the first navigation link when a click occurs
    const firstNavLink = document.querySelector('.focus-link');
    if (firstNavLink) {
      firstNavLink.focus();
    }
  };

  // Attach the click event listener when the component mounts
  useEffect(() => {
    document.addEventListener('click', handleClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);



  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="  sticky  top-0 right-0 bg-white/75 text-black  backdrop:blur-md py-2  z-20">
      <div className="flex items-center justify-between  padding__x">
        <Link href="/">
          <div className=" flex items-center space-x-3 ">
            <Image priority src={Logo} alt="Logo" className="h-14 w-14" />
            <h1 className="font-extrabold text-2xl  px-2 rounded-md  hidden sm:block text-[#242f9f]">
              Shineway
            </h1>
          </div>
        </Link>
        <div className="  items-center hidden lg:flex text-brown-300   font-bold space-x-4 capitalize ">
          {menu?.map((items) => (
            <div
              className="  focus-link hover:text-[#242f9f] "
              key={items.id}
             
            >
              <Link
                href={items.url}
                className="focus-link "
              >
             
                {items.title}
              </Link>
            </div>
          ))}
         
        <ThemeButton/>
        </div>
        <div className="lg:hidden block content-center">
          {isToggled ? (
            <XMarkIcon
              className="w-10 rotate-90-ccw text-[#242f9f]"
              onClick={() => setIsToggled(false)}
            />
          ) : (
            <Bars3BottomRightIcon
              className="w-10 text-[#242f9f]"
              onClick={() => setIsToggled(true)}
            />
          )}
          {isToggled && (
            <div className=" absolute z-30 capitalize bg-[#242f9f] pr-10 pl-40 rounded-md scale-up-hor-center  py-6 text-end right-5">
              {menu?.map((item) => (
                <div
                  className="mb-6 w-full text-bold text-white last__child"
                  key={item.id}
                >
                  <Link
                    href={item.url}
                    className="focus:border-b-4 "
                    onClick={() => setIsToggled(false)}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
               <ThemeButton/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
