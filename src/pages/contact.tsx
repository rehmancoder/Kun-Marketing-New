import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "./Layout";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_nh0alad",
          "template_nyj22yf",
          form.current,
          "fLtnxuDLvfVujByR8"
        )
        .then(
          (result) => {
            // Clear the form fields after successful submission
            setUserName("");
            setUserNumber("");
            setUserEmail("");
            setUserSubject("");
            setMessage("");
            console.log("Email sent successfully:", result);
          },
          (error) => {
            // Handle error here if needed
            console.error("Error sending email:", error);
          }
        );
    }
  };

  return (
    <Layout>
      <div className="contact-bg">
        <div className="md:p-8 p-3 h-full w-full flex justify-center">
          <div className="bg-black h-full w-full lg:w-6/12 opacity-95 text-white md:p-8 p-5 font-Poppins">
            <h1 className="md:text-5xl text-3xl font-bold">Get In Touch</h1>
            <form ref={form} onSubmit={sendEmail} className="mt-10 space-y-10">
              <input
                type="text"
                name="user_name"
                className="bg-transparent border-2 w-full p-2 border-gray-500 pl-4 outline-none"
                placeholder="Full Name"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
              <input
                type="email"
                name="user_email"
                className="bg-transparent border-2 w-full p-2 border-gray-400 pl-4 outline-none"
                placeholder="Email"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
              />
              <input
                type="number"
                name="user_number"
                className="bg-transparent border-2 w-full p-2 border-gray-400 pl-4 outline-none"
                placeholder="Contact Number"
                onChange={(e) => setUserNumber(e.target.value)}
                value={userNumber}
              />
              <div>
                <input
                  type="text"
                  name="user_subject"
                  className="bg-transparent border-2 w-full p-2 border-gray-400 pl-4 outline-none"
                  placeholder="Subject"
                  onChange={(e) => setUserSubject(e.target.value)}
                  value={userSubject}
                />
                <textarea
                  name="message"
                  id="message"
                  cols={10}
                  rows={10}
                  className="bg-transparent border-2 w-full p-2 border-gray-400 pl-4 outline-none resize-none"
                  placeholder="Type a Message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
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

export default Contact;
