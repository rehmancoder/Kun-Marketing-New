import React from "react";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Welcome from "@/components/Welcome";
import WeAreAvailable from "@/components/WeAreAvailable";
import Socities from "@/components/Socities";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import { FloatingWhatsApp } from "react-floating-whatsapp";
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
      <FloatingWhatsApp
        className="whatsapp"
        phoneNumber="+923331126588"
        accountName="Kun Marketing"
        allowEsc
        allowClickAway
        notification
        notificationSound
        statusMessage="Online"
      />
    </Layout>
  );
};

export default index;
