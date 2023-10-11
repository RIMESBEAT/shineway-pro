"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/logo.jpg";
import Link from "next/link";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import ThemeButton from "../themeProvider/ThemeButton";
import {usePathname, useRouter } from "next/navigation";

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

const router = usePathname()
  const [isToggled, setIsToggled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  useEffect(() => {
    // Set the active link based on the current route when the component mounts
    const currentRouteId = menu.find((item) => item.url === router)?.id;
    setActiveLink(currentRouteId);
  }, [router.pathname]);

  return (
    <div className="  sticky  top-0 right-0 shadow-md drop-shadow-md  backdrop-blur-md py-2  z-20">
      <div className="flex items-center justify-between  padding__x">
        <Link href="/">
          <div className=" flex items-center space-x-3 ">
            <Image priority src={Logo} alt="Logo" className="h-10 w-10" />
            <h1 className="font-extrabold text-2xl  px-2 rounded-md  hidden sm:block text-[#242f9f]">
              Shineway
            </h1>
          </div>
        </Link>
        <div className="  items-center hidden lg:flex text-brown-300   font-bold space-x-4 capitalize ">
          {menu?.map(({id, url, title}) => (
            <div
            className={activeLink === id ? 'active border-b-2 border-blue-800 text-blue-800 dark:text-gray-300 dark:border-white ' : 'text-black dark:text-gray-300'}
            onClick={() => handleLinkClick(id)}
              key={id}
             
            >
              <Link
               
                href={url}
              >
             
                {title}
              </Link>
            </div>
          ))}
         
        <ThemeButton/>
        </div>
        <div className="lg:hidden block content-center">
          {isToggled ? (
            <XMarkIcon
              className="w-10 rotate-90-ccw "
              onClick={() => setIsToggled(false)}
            />
          ) : (
            <Bars3BottomRightIcon
              className="w-10 "
              onClick={() => setIsToggled(true)}
            />
          )}
          {isToggled && (
            <div className=" absolute z-30 capitalize bg-gray-900 dark:bg-gray-950 pr-10 pl-40 rounded-md scale-up-hor-center  py-6 text-end right-5">
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
              <div onC className="bg-gray-300 dark:bg-gray-900 py-1 rounded-md flex justify-center mx-auto">

               <ThemeButton  />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
