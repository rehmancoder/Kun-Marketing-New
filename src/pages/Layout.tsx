import React from "react";
import Navbar from "@/components/Navbar"; // Create and import your Navbar component
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
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
      <main>{children}</main>
    </div>
  );
};

export default Layout;
