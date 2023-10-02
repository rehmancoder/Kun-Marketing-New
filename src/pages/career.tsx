import React from "react";
import Layout from "@/pages/Layout";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const Data = [
  {
    id: 1,
    name: "Business Development Executive (Female)",
    jobicon: <BsBriefcaseFill />,
    jobtype: "Full-Time",
    locationicon: <FaLocationDot />,
    location: "Islamabad",
    link: "More Details",
    arrow: <AiOutlineArrowRight />,
  },
  {
    id: 2,
    name: "Creative Head",
    jobicon: <BsBriefcaseFill />,
    jobtype: "Full-Time",
    locationicon: <FaLocationDot />,
    location: "Islamabad",
    link: "More Details",
    arrow: <AiOutlineArrowRight />,
  },
  {
    id: 3,
    name: "Business Development Officer",
    jobicon: <BsBriefcaseFill />,
    jobtype: "Full-Time",
    locationicon: <FaLocationDot />,
    location: "Islamabad",
    link: "More Details",
    arrow: <AiOutlineArrowRight />,
  },
  {
    id: 4,
    name: "Business Development Officer",
    jobicon: <BsBriefcaseFill />,
    jobtype: "Full-Time",
    locationicon: <FaLocationDot />,
    location: "Islamabad",
    link: "More Details",
    arrow: <AiOutlineArrowRight />,
  },
  {
    id: 5,
    name: "Video Host (Females)",
    jobicon: <BsBriefcaseFill />,
    jobtype: "Full-Time",
    locationicon: <FaLocationDot />,
    location: "Islamabad",
    link: "More Details",
    arrow: <AiOutlineArrowRight />,
  },
  {
    id: 6,
    name: "Public Relation Officer",
    jobicon: <BsBriefcaseFill />,
    jobtype: "Full-Time",
    locationicon: <FaLocationDot />,
    location: "Islamabad",
    link: "More Details",
    arrow: <AiOutlineArrowRight />,
  },
  {
    id: 7,
    name: "Accountant Assistant (Females Only)",
    jobicon: <BsBriefcaseFill />,
    jobtype: "Full-Time",
    locationicon: <FaLocationDot />,
    location: "Islamabad",
    link: "More Details",
    arrow: <AiOutlineArrowRight />,
  },
  {
    id: 8,
    name: "Human Resources Officers (Females Only)",
    jobicon: <BsBriefcaseFill />,
    jobtype: "Full-Time",
    locationicon: <FaLocationDot />,
    location: "Islamabad",
    link: "More Details",
    arrow: <AiOutlineArrowRight />,
  },
  {
    id: 9,
    name: "Front Desk Officer (Females Only)",
    jobicon: <BsBriefcaseFill />,
    jobtype: "Full-Time",
    locationicon: <FaLocationDot />,
    location: "Lahore",
    link: "More Details",
    arrow: <AiOutlineArrowRight />,
  },
  {
    id: 10,
    name: "Front Desk Representative (Females Only)",
    jobicon: <BsBriefcaseFill />,
    jobtype: "Full-Time",
    locationicon: <FaLocationDot />,
    location: "Lahore",
    link: "More Details",
    arrow: <AiOutlineArrowRight />,
  },
  {
    id: 11,
    name: "Accountant Assistant (Females Only)",
    jobicon: <BsBriefcaseFill />,
    jobtype: "Full-Time",
    locationicon: <FaLocationDot />,
    location: "Lahore",
    link: "More Details",
    arrow: <AiOutlineArrowRight />,
  },
  {
    id: 12,
    name: "Sales and Marketing Exclusive (Females Only)",
    jobicon: <BsBriefcaseFill />,
    jobtype: "Full-Time",
    locationicon: <FaLocationDot />,
    location: "Lahore",
    link: "More Details",
    arrow: <AiOutlineArrowRight />,
  },
  {
    id: 13,
    name: "Buisness Development Officer (Females Only)",
    jobicon: <BsBriefcaseFill />,
    jobtype: "Full-Time",
    locationicon: <FaLocationDot />,
    location: "Lahore",
    link: "More Details",
    arrow: <AiOutlineArrowRight />,
  },
];

const career = () => {
  return (
    <Layout>
      <div className="container mx-auto sm:py-10 sm:p-0 p-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {Data.map((items) => (
            <div
              key={items.id}
              className="bg-white p-6 flex flex-col shadow-md rounded-lg font-Poppins border-[2px] border-gray-100"
            >
              <h1 className="md:text-2xl text-xl font-medium">{items.name}</h1>
              <div className="flex items-center gap-2 mt-2 text-sm">
                {items.jobicon}
                <p>{items.jobtype}</p>
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm">
                {items.locationicon}
                <p>{items.location}</p>
              </div>
              <Link
                href="#"
                className="flex items-center gap-2 mt-5 text-sm text-primary w-44"
              >
                <p>{items.link}</p>
                {items.arrow}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default career;
