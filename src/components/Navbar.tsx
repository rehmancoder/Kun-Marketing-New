import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/img/logo.jpg";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handelBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div className="w-full shadow-lg px-6 flex bg-white lg:justify-between justify-center items-center">
          <Image
            src={Logo}
            alt="Kun-Marketing"
            className="lg:h-20 lg:w-44 w-[250px]"
          />
          {/* NavLinks */}
          <div className="lg:block hidden">
            <div className="flex gap-8 font-Poppins font-medium">
              <Link href="/" className="hover:text-primary duration-300">
                HOME
              </Link>
              <Link href="/" className="hover:text-primary duration-300">
                BLOG
              </Link>
              <Link href="/" className="hover:text-primary duration-300">
                VIDEOS
              </Link>
              <Link href="/" className="hover:text-primary duration-300">
                SOCITIES
              </Link>
              <Link href="/" className="hover:text-primary duration-300">
                OFFERS
              </Link>
              <Link href="/" className="hover:text-primary duration-300">
                NEWS
              </Link>
              <Link href="/" className="hover:text-primary duration-300">
                CAREER
              </Link>
              <Link href="/" className="hover:text-primary duration-300">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
        <div
          className="w-full bg-primary flex justify-center p-2 lg:hidden cursor-pointer"
          onClick={handelBtn}
        >
          <RiMenu3Line className="text-3xl text-white" />
        </div>
      </div>

      {isOpen && (
        <div className="bg-primary w-full fixed z-10">
          <div className="flex flex-col font-Poppins font-medium pb-10 pt-5">
            <Link
              href="/"
              className="hover:text-primary duration-300 hover:bg-white p-3"
            >
              HOME
            </Link>
            <Link
              href="/"
              className="hover:text-primary duration-300 hover:bg-white p-3"
            >
              BLOG
            </Link>
            <Link
              href="/"
              className="hover:text-primary duration-300 hover:bg-white p-3"
            >
              VIDEOS
            </Link>
            <Link
              href="/"
              className="hover:text-primary duration-300 hover:bg-white p-3"
            >
              SOCITIES
            </Link>
            <Link
              href="/"
              className="hover:text-primary duration-300 hover:bg-white p-3"
            >
              OFFERS
            </Link>
            <Link
              href="/"
              className="hover:text-primary duration-300 hover:bg-white p-3"
            >
              NEWS
            </Link>
            <Link
              href="/"
              className="hover:text-primary duration-300 hover:bg-white p-3"
            >
              CAREER
            </Link>
            <Link
              href="/"
              className="hover:text-primary duration-300 hover:bg-white p-3"
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
