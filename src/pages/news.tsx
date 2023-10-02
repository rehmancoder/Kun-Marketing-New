import React from "react";
import Layout from "./Layout";

const news = () => {
  return (
    <Layout className="mt-10">
      <div className="h-screen flex justify-center pt-24">
        <div className="flex flex-col items-center">
          <h1 className="font-Poppins text-4xl">News For You</h1>
          <div className="bg-primary h-[4px] w-44 mt-2"></div>
        </div>
      </div>
    </Layout>
  );
};

export default news;
