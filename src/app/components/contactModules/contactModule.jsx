import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactInfo, socialInfo } from "../../data/companyInfo.js";

export default function ContactModule() {
  return (
    <section className="margin-t padding-y-lg lg:pb-24 bg-[#F5F5F7] w-full flex justify-center">
      <div className="max-w-[1250px]">
        <div className="w-full">
          <span className="text-base font-semibold font-manrope md:text-lg font-base text-primary-accent">
            Contact Us
          </span>

          <p className="mt-2 text-2xl font-semibold leading-8 text-black-shade-300 font-visby lg:mt-2 sm:text-3xl lg:text-5xl md:leading-9 lg:leading-snug">
            <span className="text-primary-accent">Get in touch: </span>
            Reach out to us for inquiries, assistance, or collaborations
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-8 sm:mt-12 lg:gap-x-0 lg:gap-y-10 lg:mt-14">
          {contactInfo.slice(1, 3).map((info, index) => (
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
                  className={`text-lg sm:text-lg text-black-shade-300 tracking-wider font-semibold relative overflow-hidden lg:text-xl`}
                >
                  {info.title}
                  <span className="underline"></span>
                </p>
              </a>
            </div>
          ))}
          <div className="col-span-2 my-4 sm:col-span-1 lg:my-2">
            <a className="px-4 py-3 whitespace-nowrap  sm:text-lg text-base font-manrope font-medium tracking-wider text-white rounded cursor-pointer transition-all ease duration-300  bg-primary-accent hover:bg-[#ff968f]">
              Quick Message Form
            </a>
          </div>

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
  );
}
