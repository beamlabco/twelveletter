"use client";
import React, { useState } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { contactInfo, socialInfo } from "../../data/companyInfo.js";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = new FormData();
    // Append form data fields
    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email);
    dataToSend.append("organization", formData.organization);
    dataToSend.append("message", formData.message);

    try {
      setLoading(true);
      await axios.post("http://localhost:3000/api/send", dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 200) {
        console.log("Message sent successfully");
      }
      // Handle success
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-margin ">
      <section className="top-section-p">
        <PageTitle
          textSize="large"
          subHeading="Contact Us"
          heading="Get in Touch: Reach Out to Us for Inquiries, Assistance, or Collaborations"
        />
      </section>
      <section className="margin-t">
        <div className="flex flex-col flex-wrap w-full gap-10 lg:gap-20 sm:flex-row md:flex-nowrap">
          <form onSubmit={handleSubmit} className="w-full max-w-[550px]">
            <div className="flex flex-col w-full gap-6">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="sender_name"
                  className="text-lg font-semibold tracking-wide text-black-shade-200"
                >
                  Full Name <span className="text-primary-accent">*</span>
                </label>
                <input
                  id="sender_name"
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  onChange={handleChange}
                  className="border-b-2 text-base outline-none text-black-shade-100 tracking-wide transition-all duration-200 border-[#E6E6E6] placeholder-[#9ba4a9] leading-10  focus:border-primary-accent focus:outline-none "
                />
              </div>

              <div className="flex flex-col w-full ">
                <label
                  htmlFor="sender_email"
                  className="text-lg font-semibold tracking-wide text-black-shade-200"
                >
                  Email <span className="text-primary-accent">*</span>
                </label>
                <input
                  id="sender_email"
                  type="email"
                  placeholder="email@gmail.com"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  className="border-b-2 text-base outline-none text-black-shade-100 tracking-wide transition-all duration-200 placeholder-[#9ba4a9] leading-10 border-[#E6E6E6] focus:border-primary-accent focus:outline-none "
                />
              </div>

              <div className="flex flex-col w-full ">
                <label
                  htmlFor="sender_org"
                  className="text-lg font-semibold tracking-wide text-black-shade-200"
                >
                  Company/ Organization{" "}
                  <span className="text-primary-accent">*</span>
                </label>
                <input
                  id="sender_org"
                  type="text"
                  placeholder="org.co"
                  name="organization"
                  onChange={handleChange}
                  className="border-b-2 outline-none text-base text-black-shade-100 tracking-wide transition-all duration-200 placeholder-[#9ba4a9] leading-10 border-[#E6E6E6] focus:border-primary-accent focus:outline-none "
                />
              </div>

              <div className="flex flex-col w-full gap-4">
                <label
                  htmlFor="sender_message"
                  className="text-lg font-semibold tracking-wide text-black-shade-200"
                >
                  Message <span className="text-primary-accent">*</span>
                </label>
                <textarea
                  id="sender_message"
                  name="message"
                  required
                  onChange={handleChange}
                  className="px-3 text-base text-black-shade-100 tracking-wide focus:border-primary-accent placeholder-[#9ba4a9] py-2 border-2 outline-none transition-all duration-200 rounded-md min-h-40 "
                  placeholder="Send your message here..."
                />
              </div>
              <button
                type="submit"
                className="flex transition-all duration-200 hover:bg-[#FF988E] mt-2 w-full items-center max-w-[350px] lg:max-w-[200px] justify-center p-3 font-semibold tracking-wider rounded-md text-zinc-50 bg-primary-accent"
              >
                {loading ? (
                  <>
                    Sending{" "}
                    <FontAwesomeIcon
                      className="ml-2 animate-spin"
                      icon={faSpinner}
                    />
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>

          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1BQL9p2tnGAJW3qAgNf1kOwkuA-j74eE&ehbc=2E312F&noprof=1"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[480px] max-w-[700px] md:min-w-[400px]"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="mb-20 lg:mb-36 margin-t ">
        <div className="grid grid-cols-2 gap-6 mt-8 sm:mt-12 lg:gap-x-0 lg:gap-y-10 lg:mt-20">
          <div className="col-span-2 space-y-8 sm:col-span-1">
            {contactInfo.slice(0, 3).map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center space-x-4 cursor-pointer link w-fit "
              >
                <FontAwesomeIcon
                  className="text-xl lg:text-2xl text-primary-accent"
                  icon={info.icon}
                  width={20}
                />
                <p
                  className={`text-base sm:text-lg text-black-shade-300 tracking-wider font-semibold relative overflow-hidden lg:text-xl`}
                >
                  {info.title}
                  <span className="underline"></span>
                </p>
              </a>
            ))}
          </div>
          <div className="col-span-2 space-y-8 sm:col-span-1">
            {contactInfo.slice(3, 5).map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center space-x-4 cursor-pointer link w-fit "
              >
                <FontAwesomeIcon
                  className="text-xl lg:text-2xl text-primary-accent"
                  icon={info.icon}
                  width={20}
                />
                <p
                  className={`text-base sm:text-lg text-black-shade-300 tracking-wider font-semibold relative overflow-hidden lg:text-xl`}
                >
                  {info.title}
                  <span className="underline"></span>
                </p>
              </a>
            ))}
            <div className="flex items-center col-span-2 gap-10 sm:gap-8 sm:col-span-1">
              {socialInfo.map((socialInfo, index) => (
                <a
                  key={index}
                  title={socialInfo.title}
                  className="text-3xl transition-all duration-300 sm:text-3xl lg:text-[2rem] text-black-shade-200 hover:text-primary-accent"
                  href={socialInfo.link}
                >
                  <FontAwesomeIcon icon={socialInfo.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
