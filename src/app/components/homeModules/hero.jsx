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
        heading="TwelveLetter - Empowering Your Digital Success,"
        highlightGradient={true}
      />
      <p className="text-lg [word-spacing:2px] font-manrope leading-normal md:text-[20px] font-semibold md:leading-9 max-w-[1000px] mt-7 lg:mt-9 text-black-shade-200">
        Unlocking the potential of your online presence with innovative
        solutions, strategic insights, and tailored strategies designed to
        elevate your brand&apos;s visibility, drive engagement, and fuel
        sustainable growth in the ever-evolving digital landscape
      </p>
      <div className="flex flex-wrap items-center md:gap-12 md:justify-between w-full gap-7 mt-10 md:max-w-[550px] sm:mt-12 lg:mt-14">
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
            href="mailto:info@twelveletter.co"
            className="flex items-center space-x-4 cursor-pointer link w-fit "
          >
            <FontAwesomeIcon
              className="text-2xl lg:text-2xl text-primary-accent"
              icon={contactInfo[1].icon}
            />
            <p
              className={`text-lg  text-black-shade-200 tracking-wider font-semibold relative overflow-hidden lg:text-xl`}
            >
              {contactInfo[1].title}
              <span className="underline"></span>
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
