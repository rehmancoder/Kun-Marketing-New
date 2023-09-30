import React from "react";
import Image from "next/image";
import welcomeImg from "@/img/Park-View-City-Cinema01-1.jpg";
import guaranteeImg from "@/img/Badge100.png";
import excllenceImg from "@/img/sky-excellence-of-15-years.png";

const Welcome: React.FC = () => {
  return (
    <>
      <div className="mt-12 mb-12">
        <div className="flex justify-center items-center flex-col">
          <h1 className="md:text-4xl text-xl font-Poppins font-bold">
            Welcome to KUN MARKETING
          </h1>
          <div className="bg-primary w-[200px] h-[4px] mt-[4px] rounded-full"></div>
        </div>
        <div className="mt-12 flex justify-center items-center gap-10 w-full flex-wrap md:px-0 px-8">
          <div className="md:w-1/2 w-full">
            <div className="flex items-center md:justify-start justify-center gap-6">
              <div>
                <Image
                  src={guaranteeImg}
                  className="h-[80px] w-[80px] object-cover"
                  alt={""}
                />
              </div>
              <div className="mt-[2px]">
                <Image
                  src={excllenceImg}
                  className="h-[80px] w-[80px] object-cover"
                  alt={""}
                />
              </div>
            </div>
            <div className="mt-2">
              <span className="md:text-md text-center font-Poppins font-medium">
                Welcome to the rapidly emerging Real Estate Company{" "}
                <span className="font-bold text-primary">Kun Marketing </span>
                Islamabad working from last 18 years. Our professional team is
                serving many housing societies for marketing purposes and has
                completed many renowned projects achieving high excellency. Use
                of most modern techniques of marketing like e-media and
                web-based medium for mass communication is one of our strengths
                to reach-out maximum number of clients and customers.
              </span>
            </div>
          </div>
          <div className="md:w-1/3 w-full">
            <Image
              src={welcomeImg}
              className="h-[300px] object-cover"
              alt={""}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
