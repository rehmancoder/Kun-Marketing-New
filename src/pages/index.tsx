import React from "react";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Welcome from "@/components/Welcome";
import WeAreAvailable from "@/components/WeAreAvailable";
import Socities from "@/components/Socities";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
// import Logo from "@/img/logo.jpg";
// @ts-ignore
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

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
        <WhatsAppWidget
          // CompanyIcon={Logo}
          phoneNumber="+923331126588"
          message="Hey! 👋🏼 How can I help you?"
          companyName="Kun Marketing"
          replyTimeText="Online"
          sendButton="Let's Go!"
        />
      </div>
    </div>
  );
};

export default index;
