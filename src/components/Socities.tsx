import React from "react";
import Society1 from "@/img/Capital-Smart-City.jpg";
import Society2 from "@/img/Bahria-Town-Karachi-2.jpg";
import Society3 from "@/img/Park-View-City-Cinema01-1.jpg";
import Society4 from "@/img/Park-View-City.jpg";
import Society5 from "@/img/Lahore-Smart-City.jpg";
import Society6 from "@/img/New-City-Paradise.jpg";
import Image from "next/image";

const Data = [
  { id: 1, name: "CAPITAL SMART CITY", img: <Image src={Society1} alt="" /> },
  { id: 2, name: "AL NOOR ORCHARD", img: <Image src={Society3} alt="" /> },
  { id: 3, name: "PARK VIEW CITY", img: <Image src={Society4} alt="" /> },
  {
    id: 4,
    name: "BAHRIA TOWN KARACHI 2 ",
    img: <Image src={Society2} alt="" />,
  },
  {
    id: 5,
    name: "LAHORE SMART CITY",
    img: <Image src={Society5} alt="" />,
  },
  {
    id: 5,
    name: "NEW CITY PARADISE",
    img: <Image src={Society6} alt="" />,
  },
];

const Socities = () => {
  return (
    <div className="text-white py-10 w-full bg-black h-full">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-semibold mt-10">CURRENT SOCITIES</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-10 mt-16 px-6">
        {Data.map((items) => (
          <div
            key={items.id}
            className="text-center w-10/12
            "
          >
            <div className="w-full">{items.img}</div>
            <h1 className="bg-primary p-2 font-Poppins font-semibold">
              {items.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socities;
