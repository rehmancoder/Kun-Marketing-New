import React from "react";
import Navbar from "@/components/Navbar"; // Create and import your Navbar component

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
