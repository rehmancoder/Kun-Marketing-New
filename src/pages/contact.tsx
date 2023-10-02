import React from "react";
import Layout from "./Layout";

const contact = () => {
  return (
    <Layout>
      <div className="contact-bg">
        {/* <div className="absolute top-0 bg-black w-full h-full opacity-40"></div> */}
        <div className="md:p-8 p-3 h-full w-full flex justify-center">
          <div className="bg-black h-full w-full lg:w-6/12 opacity-95 text-white md:p-8 p-5 font-Poppins">
            <h1 className="md:text-5xl text-3xl font-bold">Get In Touch</h1>
            <form className="mt-10 space-y-10">
              <input
                type="text"
                className="bg-transparent border-2 w-full p-2 border-gray-500 pl-4 outline-none"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="bg-transparent border-2 w-full p-2 border-gray-400 pl-4 outline-none"
                placeholder="Email"
              />
              <input
                type="number"
                className="bg-transparent border-2 w-full p-2 border-gray-400 pl-4 outline-none"
                placeholder="Contact Number"
              />
              <div>
                <input
                  type="text"
                  className="bg-transparent border-2 w-full p-2 border-gray-400 pl-4 outline-none"
                  placeholder="Subject"
                />
                <textarea
                  name=""
                  id=""
                  cols={10}
                  rows={10}
                  className="bg-transparent border-2 w-full p-2 border-gray-400 pl-4 outline-none resize-none"
                  placeholder="Type a Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-transparent border-2 w-full p-2 border-gray-400 pl-4 outline-none hover:bg-primary hover:border-white duration-300"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
