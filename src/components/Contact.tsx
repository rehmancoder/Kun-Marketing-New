import React from "react";

const Contact = () => {
  return (
    <div className="bg-img-1 w-full relative lg:h-[80vh] h-screen">
      <div className="contact-grd h-full w-full opacity-90"></div>
      <div className="absolute top-0 p-10 flex lg:flex-row flex-col items-center justify-center  w-full">
        <div className="flex flex-col">
          <h1 className="text-white font-Poppins text-4xl font-semibold">
            WE ARE READY TO SERVE YOU IN REAL ESTATE
          </h1>
          <div className="bg-white h-[4px] w-96 mt-5"></div>
          <div className="text-white mt-5 font-Poppins">
            <h3 className="font-semibold text-lg">CALL US TODAY</h3>
            <h2 className="text-4xl font-bold">+92 333-999-9764</h2>
            <h2 className="text-4xl font-bold mt-2">(051) 786-4444</h2>
          </div>
        </div>
        <div className="bg-black rounded-lg p-3 mt-10 flex flex-col items-center pt-5 pb-10">
          <h1 className="font-Poppins text-2xl text-white font-medium">
            Request for <span className="text-primary">DISCOUNT</span> Booking
          </h1>
          <form className="self-start mt-5 px-5 w-full space-y-10">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-black border-0 border-b-2 w-full border-primary pb-2 outline-none text-white"
            />
            <input
              type="number"
              placeholder="Contact Number"
              className="bg-black border-0 border-b-2 w-full border-primary pb-2 outline-none text-white"
            />
            <textarea
              name=""
              id=""
              placeholder="Type a Message"
              className="bg-black border-0 border-b-2 w-full border-primary pb-2 outline-none text-white md:h-32 h-18"
            ></textarea>
            <button className="bg-primary font-Poppins w-full p-2 rounded-lg text-white">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
