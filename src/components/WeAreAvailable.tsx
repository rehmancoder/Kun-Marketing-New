import Image from "next/image";
import React from "react";
import houseImg from "@/img/house_PNG50.png";
import highlightImg from "@/img/Sketch-underline-2.png";

const WeAreAvailable: React.FC = () => {
  return (
    <>
      <div className="mb-12 pt-12 container mx-auto">
        <div className="bg-[url('../img/banner.jpg')] relative w-full h-[300px] flex items-center">
          <div className="bg-white opacity-60 h-full w-full"></div>
          <div className="flex justify-between absolute gap-10 w-full">
            <div className="-ml-20 pt-10">
              <Image src={houseImg} className="w-[400px]" alt={""} />
            </div>
            <div className="font-Poppins flex items-center md:pr-10">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl text-center">WE ARE 24/7 AVAILABLE</h1>
                <div className="mt-8 select-none">
                  <Image src={highlightImg} alt={""} />
                </div>
                <div className="mt-2">
                  <button className="py-2 text-md lg:px-2 bg-primary text-white w-44 rounded-md">
                    Contact US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeAreAvailable;
