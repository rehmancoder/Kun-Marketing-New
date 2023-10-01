import React from "react";
import Image from "next/image";
import articelImg from "@/img/article-img-1.jpg";
import articelImg2 from "@/img/article-img-2.jpg";
import articelImg3 from "@/img/article-img-3.jpg";
import articelImg4 from "@/img/article-img-4.jpg";
import articelImg5 from "@/img/article-img-5.jpg";
import articelImg6 from "@/img/article-img-6.jpg";
import articelImg7 from "@/img/article-img-7.jpg";
import Layout from "@/pages/Layout";

const Article: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto lg:w-2/3 mt-20">
        <h1 className="font-Poppins text-4xl text-primary font-bold">
          Capital Hills Islamabad
        </h1>
        <p className="mt-6 text-xl">
          Aug 12, 2023 |{" "}
          <span className="font-semibold text-primary font-Poppins">
            Islamabad
          </span>
        </p>
        <h2 className="font-bold font-Poppins mt-6 text-primary mb-6">
          Introduction
        </h2>
        <div className="mb-4">
          <span className="leading-8 text-lg text-slate-800 font-Poppins">
            <span className="underline-style">Capital Hills Islamabad</span> is
            a unique residential project{" "}
            <span className="underline-style">developed</span> by NSK
            Construction Private Limited and owned by{" "}
            <span className="underline-style">Muhammad Shah Zain</span>
            chairman of Capital Group. It is{" "}
            <span className="underline-style">located</span> at Pir Sohawa Road,
            adjacent to <span className="underline-style">Dino Valley</span>.
            Capital Hills will not only provide you with a comfortable life but
            also enable you to enjoy mesmerizing views of Margalla Hills. We
            ensure that living in Capital Hills will not be much different than
            any top-notch residential venture of Switzerland.
          </span>
        </div>
        <div className=" mb-20">
          <span className="leading-8 text-lg text-slate-800 font-Poppins">
            Sky Marketing brings you a world-class investment opportunity with
            modern living in the heart of{" "}
            <span className="underline-style">Margalla Hills</span>. Capital
            Hills is a supreme residence for a modern lifestyle, with
            spectacular views in every direction. In order to have a comfortable
            life while accessing luxurious amenities, make sure to invest in
            Capital Hills. It is worth mentioning that{" "}
            <span className="underline-style">Kun Marketing </span> is the
            exclusive sales and{" "}
            <span className="underline-style">marketing partner </span> of
            <span className="underline-style">
              {" "}
              Capital Hills Islamabad{" "}
            </span>{" "}
            and reserves complete rights. So,{" "}
            <span className="underline-style">CALL US NOW</span> and book your
            dream plot or get to know more about the project.
          </span>
        </div>
        <div className="md:ml-12">
          <div className="mb-20 ">
            <Image src={articelImg} alt="" />
          </div>
          <div className="mb-4 ">
            <Image src={articelImg2} alt="" />
          </div>
        </div>
        <div className="mb-4">
          <h1 className="font-bold  md:text-3xl text-primary font-Poppins">
            Capital Hills Islamabad Owner and Developers
          </h1>
        </div>
        <div className="mb-12">
          <span className="leading-8 text-lg text-slate-800 font-Poppins">
            The Capital Hills Islamabad is owned by{" "}
            <span className="underline-style">
              Mr. Muhammad Shah Zain, chairman of Capital Group,
            </span>
            and developed by NSK Construction Private Limited. The developers
            are putting forward their best efforts to develop this masterpiece
            as per international standards.
          </span>
        </div>
        <div className="mb-4">
          <h1 className="font-bold md:text-3xl text-primary font-Poppins mb-4">
            Capital Hills Islamabad Location
          </h1>
          <div className="mb-8">
            <span className="leading-8 text-lg text-slate-800 font-Poppins">
              The <span className="underline-style">location</span> of Capital
              Hills Islamabad is ideally located at{" "}
              <span className="underline-style">Pir Sohawa</span> Road adjacent
              to Dino Valley. The proposed Road Alignment project connecting
              Bari Imam to Pir Sohawa has also been under consideration with
              CDA. It will be a great initiative to reduce the time to reach Pir
              Sohawa by a considerable margin while providing a faster
              alternative to the Capital Hills.
            </span>
            <span className="leading-8 text-lg text-slate-800 font-Poppins mt-6 block">
              This road will start from where the Margalla Road ends, turn
              towards the Pak Secretariat/Parliament, and will finally meet at
              Pir Sohawa. The final plan and connection points are yet to be
              disclosed, so stay connected with Sky Marketing for the latest
              updates.
            </span>
          </div>
          <div className="md:ml-12 mb-6">
            <Image src={articelImg3} alt="" />
          </div>
          <div className="mb-6">
            <span className="text-lg text-slate-900 font-Poppins font-bold">
              The location is perfect for those looking for a comfortable yet
              peaceful life.
            </span>
          </div>
          <div className="md:ml-12 mb-6">
            <Image src={articelImg4} alt="" />
          </div>
          <div className="mb-6">
            <span className="text-lg text-slate-900 font-Poppins">
              <span className="underline-style">
                Capital Hills Islamabad Location Map
              </span>{" "}
              is quite easy to understand as it provides you with easy and quick
              access to the project.
            </span>
          </div>
          <div className="md:ml-12 mb-6">
            <Image src={articelImg5} alt="" />
          </div>
          <div className="mb-8">
            <h2 className="font-bold font-Poppins text-2xl mt-6 text-primary mb-2">
              Capital Hills Islamabad Accessibility
            </h2>
            <span className="text-lg text-slate-900 font-Poppins">
              The Capital Hills is quite an accessible project.
            </span>
          </div>
          <div className="md:ml-12 mb-6">
            <Image src={articelImg6} alt="" />
          </div>
          <div className="mb-10">
            <h2 className="font-bold font-Poppins leading-8 md:leading-10 md:text-2xl text-slate-700">
              Please remember that the travel timing may vary from person to
              person and road conditions. Below are the approximate
              accessibilities of Capital Hills:
            </h2>
            <div className="ml-8 mt-6">
              <ul className="list-disc">
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  30 min drive away from Sector F-11
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  25 min drive away from{" "}
                  <span className="underline-style text-primary">
                    Blue Area
                  </span>
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  15 min drive away from{" "}
                  <span className="underline-style text-primary">
                    Daman-e-Koh
                  </span>
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  41 min drive away from{" "}
                  <span className="underline-style text-primary">
                    Bharakahu Bypass
                  </span>
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  5 min drive away from{" "}
                  <span className="underline-style text-primary">
                    Monal Restaurant
                  </span>
                  /Pir Sohawa
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  45 Min drive away from{" "}
                  <span className="underline-style text-primary">
                    Islamabad International Airport
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="font-bold font-Poppins md:text-2xl mt-6 text-primary mb-2">
              Capital Hills Islamabad Nearby Landmarks & Places
            </h2>
            <span className="text-lg text-slate-900 font-Poppins block mb-4">
              Below are the nearby landmarks and places in Capital Hills
              Islamabad:
            </span>
            <div className="ml-6">
              <ul className="list-disc">
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  Bhara Kahu
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  Bruti Top
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  Dino Valley
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  Daman-e-Koh
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  Shahdara Valley
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  Pineland Heights
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  CDA Rest House
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  Sangra Gali Bazar
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  Trail 5 (Dara Janglan)
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  Pine Valley Residencia
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  The Monal Restauran
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  Whispering Pines Phase 2
                </li>
                <li className="text-lg font-medium font-Poppins mt-3 text-primary">
                  <a href="#">Quaid-e-Azam University</a>
                </li>
                <li className="text-lg text-slate-900 font-medium font-Poppins mt-3">
                  Highland Country Club & Resort
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-bold font-Poppins text-2xl mt-6 text-primary mb-2">
              Capital Hills Islamabad Master Plan
            </h2>
            <span className="text-lg text-slate-900 font-Poppins">
              The <span className="underline-style">master plan </span> of
              <span className="underline-style">
                Capital Hills Islamabad
              </span>{" "}
              is excellently designed by a team of professionals and experts. It
              offers various sizes of residential plots at affordable prices. It
              is worth mentioning that Capital Hills spans over a huge area of
              almost{" "}
              <span className="underline-style">
                10,000 Kanal premium land.
              </span>
            </span>
          </div>
          <div className="md:ml-12 mb-6">
            <Image src={articelImg7} alt="" />
          </div>
          <div className="mb-6">
            <h2 className="font-bold font-Poppins text-3xl">
              Kun Marketing Contact Number's
            </h2>
            <ul className="list-disc ml-6">
              <li className="font-bold font-Poppins text-xl mt-4 text-primary">
                +92 333-112-6586
              </li>
              <li className="font-bold font-Poppins text-xl mt-1 text-primary">
                +92 333-112-6588
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="font-bold font-Poppins text-3xl mb-2">Conclusion</h2>
            <span className="text-lg text-slate-900 font-Poppins">
              The Capital Hills Islamabad is undoubtedly a perfect living place
              due to its modern amenities, prime location, and sophisticated
              style. The main aim of the developers is to allow its residents to
              get the lifestyle they deserve.
            </span>
          </div>
          <div className="mb-6">
            <span className="tracking-wide text-primary">Share via:</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Article;
