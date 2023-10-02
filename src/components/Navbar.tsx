import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/img/logo.jpg";
import { RiMenu3Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handelBtn = () => {
    setIsOpen(!isOpen);
  };
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const handledrop = () => {
    setIsDrop(!isDrop);
  };
  const [isHome, setIsHome] = useState<boolean>(false);
  const handlehomedrop = () => {
    setIsHome(!isHome);
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
              <Link
                href="#"
                className="hover:text-primary duration-300"
                onClick={handlehomedrop}
              >
                <div className="flex items-center gap-2">
                  <h1>BLOG</h1>
                  <FaChevronDown />
                </div>
                {isHome && (
                  <div className="flex flex-col fixed bg-primary z-10 w-44 mt-4">
                    <Link
                      href="/article"
                      className=" duration-300 w-full p-2 pl-3 hover:border-l-8 border-white hover:bg-black hover:text-white"
                    >
                      Article 1
                    </Link>
                    <Link
                      href="/article2"
                      className=" duration-300 w-full p-2 pl-3 hover:border-l-8 border-white hover:bg-black hover:text-white"
                    >
                      Article 2
                    </Link>
                    <Link
                      href="/"
                      className="duration-300 w-full p-2 pl-3 hover:border-l-8 border-white hover:bg-black hover:text-white"
                    >
                      Article 3
                    </Link>
                    <Link
                      href="/"
                      className="duration-300 w-full p-2 pl-3 hover:border-l-8 border-white hover:bg-black hover:text-white"
                    >
                      Article 4
                    </Link>
                  </div>
                )}
              </Link>
              <Link href="/videos" className="hover:text-primary duration-300">
                VIDEOS
              </Link>
              <Link href="/" className="hover:text-primary duration-300">
                SOCITIES
              </Link>
              <Link href="/" className="hover:text-primary duration-300">
                OFFERS
              </Link>
              <Link href="/news" className="hover:text-primary duration-300">
                NEWS
              </Link>
              <Link href="/" className="hover:text-primary duration-300">
                CAREER
              </Link>
              <Link href="/contact" className="hover:text-primary duration-300">
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
        <div className="bg-primary w-full">
          <div className="flex flex-col font-Poppins font-medium pb-10 pt-5">
            <Link
              href="/"
              className="hover:text-primary duration-300 hover:bg-white p-3"
            >
              HOME
            </Link>
            <Link href="#" className="" onClick={handledrop}>
              <div className="flex items-center gap-2 hover:text-primary duration-300 hover:bg-white w-full p-3">
                <h1>BLOG</h1>
                <FaChevronDown />
              </div>
            </Link>
            {isDrop && (
              <div className="flex flex-col">
                <Link
                  href="/article"
                  className=" duration-300 w-full p-2 pl-10 hover:border-l-8 border-white hover:bg-black hover:text-white"
                >
                  Article 1
                </Link>
                <Link
                  href="/article2"
                  className=" duration-300 w-full p-2 pl-10 hover:border-l-8 border-white hover:bg-black hover:text-white"
                >
                  Article 2
                </Link>
                <Link
                  href="/"
                  className="duration-300 w-full p-2 pl-10 hover:border-l-8 border-white hover:bg-black hover:text-white"
                >
                  Article 3
                </Link>
                <Link
                  href="/"
                  className="duration-300 w-full p-2 pl-10 hover:border-l-8 border-white hover:bg-black hover:text-white"
                >
                  Article 4
                </Link>
              </div>
            )}
            <Link
              href="/videos"
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
              href="/news"
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
              href="/contact"
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
