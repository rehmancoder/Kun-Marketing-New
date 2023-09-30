import React from "react";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { BiBuildings } from "react-icons/bi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { MdReviews } from "react-icons/md";
import Avatar1 from "@/img/brooke-cagle.jpg";
import Avatar2 from "@/img/michael-dam.jpg";
import Image from "next/image";

const Reviews = () => {
  return (
    <div>
      <div className="py-10 pt-20 flex flex-col justify-center font-Poppins">
        <div className="flex flex-col items-center justify-center">
          <h1 className="md:text-4xl text-2xl text-center font-semibold">
            WHY CHOOSE KUN MARKETING
          </h1>
          <div className="w-44 h-[5px] bg-primary mt-3"></div>
        </div>
        <div className="flex flex-col justify-center gap-10">
          <div className="px-8 mt-16 flex md:flex-row justify-between flex-col items-center">
            {/* List */}
            <div className="flex justify-center w-full">
              <div className="flex flex-col gap-10 lg:w-8/12 w-full">
                <div className="flex items-center">
                  <HiOutlinePresentationChartLine className="text-primary text-5xl" />
                  <div className="flex justify-center w-full">
                    <h1 className="text-xl font-semibold">MARKETERS</h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <AiOutlineDollarCircle className="text-primary text-5xl" />
                  <div className="flex justify-center w-full">
                    <h1 className="text-xl font-semibold">
                      INVESTMENT CONSULTANT
                    </h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoExtensionPuzzleOutline className="text-primary text-5xl" />
                  <div className="flex justify-center w-full">
                    <h1 className="text-xl font-semibold">
                      DEALER & PROMOTERS
                    </h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <GrReactjs className="text-primary text-5xl" />
                  <div className="flex justify-center w-full">
                    <h1 className="text-xl font-semibold">DEVELOPERS</h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <BiBuildings className="text-primary text-5xl" />
                  <div className="flex justify-center w-full">
                    <h1 className="text-xl font-semibold">PROPERTY ADVISOR</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* Reviews */}
            <div className="w-full mt-16 flex flex-col gap-16">
              <div className="flex justify-center items-center flex-col bg-[#0c71c3] w-full rounded-lg p-5">
                <div className="-mt-14 bg-primary p-2 rounded-full shadow-2xl h-14 w-14 flex justify-center items-center text-white text-2xl">
                  <MdReviews classNames="text-2xl text-white" />
                </div>
                <Image
                  src={Avatar1}
                  alt=""
                  className="rounded-full h-24 w-24 object-cover mt-5"
                />
                <div className="text-white font-Poppins mt-7">
                  <h2 className="text-sm font-light leading-6">
                    Had taken consultation regarding purchase of property in
                    islamabad for my relatives, thanks to team @kunmarketing for
                    making it that simple. Highly recommended..!
                  </h2>
                  <h1 className="text-xl font-semibold mt-6">Ali Haider</h1>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col bg-[#0c71c3] w-full rounded-lg p-5">
                <div className="-mt-14 bg-primary p-2 rounded-full shadow-2xl h-14 w-14 flex justify-center items-center text-white text-2xl">
                  <MdReviews classNames="text-2xl text-white" />
                </div>
                <Image
                  src={Avatar2}
                  alt=""
                  className="rounded-full h-24 w-24 object-cover mt-5"
                />
                <div className="text-white font-Poppins mt-7">
                  <h2 className="text-sm font-light leading-6">
                    Its a best & reliable place to get your investment secure
                    through Kun Marketing team. Highly Recommended
                  </h2>
                  <h1 className="text-xl font-semibold mt-6">Yusra Sajid</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="font-Poppins flex justify-center flex-col items-center mt-16">
            <h1 className="sm:text-4xl text-3xl font-semibold">
              Our clients love us
            </h1>
            <h2 className="md:text-xl">We have an average of 9.6</h2>
            <div className="flex gap-4 md:text-5xl text-4xl text-primary mt-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
