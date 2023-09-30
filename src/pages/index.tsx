import React from "react";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Welcome from "@/components/Welcome";
import WeAreAvailable from "@/components/WeAreAvailable";
import Socities from "@/components/Socities";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

const index = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Welcome />
      <WeAreAvailable />
      <Socities />
      <Reviews />
      <Contact />
    </div>
  );
};

export default index;
