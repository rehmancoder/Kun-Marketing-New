import Image from "next/image";
import React from "react";
import bannerCardImg from "@/img/CH-image.jpg";
import Link from "next/link";

const Banner: React.FC = () => {
  return (
    <>
      <div className="bg-img">
        <div className="relative">
          <div className="bg-black w-full h-[80vh] opacity-60"></div>
          <div className="absolute top-0 w-full flex items-center justify-center">
            <div className="flex flex-col justify-center w-full items-center md:h-[80vh] h-[80vh] pt-6">
              <h1 className="md:text-6xl text-4xl text-primary font-bold">
                MOVE ON UP
              </h1>
              <h1 className="text-white md:text-4xl text-2xl text-center px-4 mt-5">
                We have more than 18 years of experience
              </h1>
              <div className="flex justify-center md:flex-row flex-col gap-6 md:gap-12 md:mt-20 mt-3">
                <Link href="/article" className="bg-white w-full h-56">
                  <Image
                    src={bannerCardImg}
                    className="w-full h-[180px] object-cover"
                    alt={""}
                  />
                  <div className="bg-primary w-full h-[44px] flex items-center justify-center">
                    <span className="text-white tracking-wider font-Poppins">
                      CAPITAL HILLS
                    </span>
                  </div>
                </Link>
                <div className="bg-white w-full h-56">
                  <Image
                    src={bannerCardImg}
                    className="w-full h-[180px] object-cover"
                    alt={""}
                  />
                  <div className="bg-primary w-full h-[44px] flex items-center justify-center">
                    <span className="text-white tracking-wider font-Poppins">
                      CAPITAL HILLS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
