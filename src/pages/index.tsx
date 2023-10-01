import React from "react";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Welcome from "@/components/Welcome";
import WeAreAvailable from "@/components/WeAreAvailable";
import Socities from "@/components/Socities";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Layout from "@/pages/Layout";

const index = () => {
  return (
    <Layout>
      <Banner />
      <Welcome />
      <WeAreAvailable />
      <Socities />
      <Reviews />
      <Contact />
    </Layout>
  );
};

export default index;
