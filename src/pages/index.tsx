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
      <div className="fixed bottom-7">
        <FloatingWhatsApp
          phoneNumber="+923331126588"
          accountName="Kun Marketing"
          allowEsc
          allowClickAway
          notification
          notificationSound
          statusMessage="Online"
        />
      </div>
    </div>
  );
};

export default index;
