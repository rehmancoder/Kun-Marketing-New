import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#1f2833] grid md:grid-cols-2 grid-cols-1 gap-5 p-5 text-white font-Poppins px-10 pt-20">
        <div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold">QUICK LINKS</h1>
            <div className="bg-primary w-44 h-[3px] mt-2"></div>
          </div>
          <div className="flex flex-col gap-3 mt-5 text-xl font-medium w-min">
            <Link
              href="/"
              className="hover:text-primary hover:pl-2 duration-300"
            >
              BLOG
            </Link>
            <Link
              href="/"
              className="hover:text-primary hover:pl-2 duration-300"
            >
              VIDEOS
            </Link>
            <Link
              href="/"
              className="hover:text-primary hover:pl-2 duration-300"
            >
              SOCITIES
            </Link>
            <Link
              href="/"
              className="hover:text-primary hover:pl-2 duration-300"
            >
              OFFERS
            </Link>
            <Link
              href="/"
              className="hover:text-primary hover:pl-2 duration-300"
            >
              NEWS
            </Link>
            <Link
              href="/"
              className="hover:text-primary hover:pl-2 duration-300"
            >
              CAREER
            </Link>
            <Link
              href="/"
              className="hover:text-primary hover:pl-2 duration-300"
            >
              CONTACT
            </Link>
          </div>
          <div className="flex gap-5 mt-5 text-2xl">
            <Link href="/" className="">
              <FaFacebookF className="social-icons" />
            </Link>
            <Link href="/" className="">
              <FaTwitter className="social-icons" />
            </Link>
            <Link href="/" className="">
              <AiFillInstagram className="social-icons" />
            </Link>
            <Link href="/" className="">
              <FaYoutube className="social-icons" />
            </Link>
            <Link href="/" className="">
              <FaLinkedinIn className="social-icons" />
            </Link>
            <Link href="/" className="">
              <FaPinterestP className="social-icons" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold">DISCLAIMER</h1>
            <div className="bg-primary w-44 h-[3px] mt-2"></div>
          </div>
          <p className="mt-5">
            All data, stats, and information set forth on this
            platform/website/blogs are initially gathered from reliable online
            sources. However, no warranties/guarantees are made for the
            precision/accuracy of the information shared in any content on the
            website. Any investment-related financial or physical loss inflicted
            on the user or faced by the user or any of his/her associates using
            the Sky Marketing website/blogs could not make Sky Marketing held
            responsible in any local or international justice
            institutions/courts.Please proceed with the investments at your own
            risk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
