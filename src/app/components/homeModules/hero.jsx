import React from "react";
import PageTitle from "../pageTitle/pageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactInfo } from "../../data/companyInfo.js";
import Link from "next/link";

export default function hero() {
  return (
    <>
      <PageTitle
        highlightTextEnd=" One Click at a Time."
        textSize="xl"
        heading="Twelveletter- Empowering Your Digital Success,"
        highlightGradient={true}
      />
      <p className="text-lg [word-spacing:2px] font-manrope leading-normal md:text-[20px] font-semibold md:leading-9 max-w-[1000px] mt-7 lg:mt-9 text-black-shade-200">
        Unlocking the Potential of Your Online Presence with Innovative
        Solutions, Strategic Insights, and Tailored Strategies Designed to
        Elevate Your Brand&apos;s Visibility, Drive Engagement, and Fuel
        Sustainable Growth in the Ever-Evolving Digital Landscape
      </p>
      <div className="flex flex-wrap items-center md:gap-12 md:justify-between w-full gap-7 mt-10 md:max-w-[500px] sm:mt-12 lg:mt-14">
        <Link
          title="Quick message form"
          href="/contact-us"
          className="px-5 py-3 font-visby font-semibold whitespace-nowrap  sm:text-lg text-lg tracking-wide text-white rounded cursor-pointer transition-all ease duration-300  bg-primary-accent hover:bg-[#ff968f]"
        >
          Quick Message Form
        </Link>

        <div>
          <a
            title="Email"
            href={contactInfo[2].link}
            className="flex items-center space-x-4 cursor-pointer link w-fit "
          >
            <FontAwesomeIcon
              className="text-2xl lg:text-2xl text-primary-accent"
              icon={contactInfo[2].icon}
            />
            <p
              className={`text-lg  text-black-shade-200 tracking-wider font-semibold relative overflow-hidden lg:text-xl`}
            >
              {contactInfo[2].title}
              <span className="underline"></span>
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
