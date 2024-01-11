import React from "react";
import PageTitle from "../pageTitle/pageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactInfo, socialInfo } from "../../data/companyInfo.js";

export default function ContactModule() {
  return (
    <section className="pt-8 pb-24 sm:pt-10 container-margin lg:pt-24 lg:pb-48">
      <PageTitle
        subHeading="Contact Us"
        textSize="medium"
        heading="Get in Touch: Reach Out to Us for Inquiries, Assistance, or Collaborations"
      />
      <div className="grid grid-cols-2 mt-8 sm:mt-10 gap-7 lg:gap-x-0 lg:gap-y-12 lg:mt-14">
        {contactInfo.slice(1).map((info, index) => (
          <div key={index} className="col-span-2 sm:col-span-1">
            <a
              href={info.link}
              className="flex items-center space-x-4 cursor-pointer link w-fit "
            >
              <FontAwesomeIcon
                className="text-xl lg:text-2xl text-primary-accent"
                icon={info.icon}
              />
              <p
                className={`text-xl text-black-shade-300 font-semibold relative overflow-hidden lg:text-xl`}
              >
                {info.title}
                <span className="underline"></span>
              </p>
            </a>
          </div>
        ))}
        <div className="col-span-2 my-4 sm:col-span-1 lg:my-0">
          <a className="px-4 py-3 whitespace-nowrap  sm:text-lg text-xl font-base tracking-wider text-white rounded cursor-pointer transition-all ease duration-300  bg-primary-accent hover:bg-[#ff968f]">
            Quick Message Form
          </a>
        </div>

        <div className="flex items-center col-span-2 gap-10 sm:gap-8 sm:col-span-1">
          {socialInfo.map((socialInfo, index) => (
            <a
              key={index}
              title={socialInfo.title}
              className="text-4xl transition-all duration-300 sm:text-3xl lg:text-[2rem] text-black-shade-300 hover:text-primary-accent"
              href={socialInfo.link}
            >
              <FontAwesomeIcon icon={socialInfo.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
