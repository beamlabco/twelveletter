import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactInfo, socialInfo } from "../../data/companyInfo.js";
import PageTitle from "../pageTitle/pageTitle.jsx";
import Link from "next/link.js";

export default function ContactModule() {
  return (
    <section className="margin-t padding-y-lg lg:pb-24 bg-[#F5F5F7] w-full flex justify-center">
      <div className="w-full container-margin">
        <PageTitle
          subHeading="Contact Us"
          highlightText="Get in touch:"
          textSize="large"
          extraClass="font-semibold"
          heading=" Reach out to us for inquiries, assistance, or collaborations"
          tag="h2"
        />

        <div className="grid grid-cols-2 gap-6 mt-8 sm:mt-12 lg:gap-x-0 lg:gap-y-10 lg:mt-14">
          {contactInfo.slice(0, 2).map((info, index) => (
            <div key={index} className="col-span-2 sm:col-span-1">
              <a
                title={info.title}
                href={info.link}
                className="flex items-center space-x-4 cursor-pointer link w-fit "
              >
                <FontAwesomeIcon
                  className="text-xl lg:text-2xl text-primary-accent"
                  icon={info.icon}
                />
                <p
                  className={`text-lg sm:text-lg text-black-shade-300 tracking-wider font-semibold relative overflow-hidden lg:text-xl`}
                >
                  {info.title}
                  <span className="underline"></span>
                </p>
              </a>
            </div>
          ))}
          <div className="col-span-2 my-4 sm:col-span-1 lg:my-2">
            <Link
              title="Quick message form"
              href="/contact-us"
              className="px-4 py-3 whitespace-nowrap  sm:text-lg text-base font-manrope font-medium tracking-wider text-white rounded cursor-pointer transition-all ease duration-300  bg-primary-accent hover:bg-[#ff968f]"
            >
              Quick Message Form
            </Link>
          </div>

          <div className="flex items-center col-span-2 gap-10 sm:gap-8 sm:col-span-1">
            {socialInfo.map((socialInfo, index) => (
              <a
                target="_blank"
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
  );
}
