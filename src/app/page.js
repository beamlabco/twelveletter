"use client";
import Contact from "./(routes)/contact-us/contact";
import BrandModule from "./components/brandModule/brandModule";
import ServiceModule from "./components/homeModules/serviceModule";
import PortfolioSlider from "./components/homeModules/portfolioSlider";
import PageTitle from "./components/pageTitle/pageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactInfo } from "./data/companyInfo.js";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="absolute z-0 w-full min-h-screen overflow-hidden blur-[85px]">
          <div className="absolute top-0 right-0 w-16 h-16 opacity-60"></div>
          <div className="absolute bg-[#0084ff5e] h-[300px] w-[300px] left-[-170px] top-1/2 lg:h-[400px] lg:w-[500px] opacity-30 lg:left-[-300px] lg:top-1/2 "></div>
          <div className="absolute h-[500px] w-[500px] bg-primary-accent right-[-350px] top-[-300px] lg:h-[600px] lg:w-[600px] lg:right-[-400px] opacity-60 lg:top-[-500px]"></div>
        </div>
        <section className=" relative z-10 flex min-h-[40vh] pt-10 flex-col justify-center  lg:min-h-[74vh] container-margin">
          <PageTitle
            highlightTextEnd="Your success, our mission"
            textSize="xl"
            heading="Designing dreams, marketing reality: "
            extraClass="lg:leading-[1.3]"
            maxWidth="max-w-[1200px]"
            highlightGradient={true}
          />
          <p className="text-lg [word-spacing:2px] font-manrope leading-normal md:text-[22px] font-semibold md:leading-9  max-w-[1000px] mt-7 lg:mt-8 text-black-shade-200">
            Infuse brilliance into your brand journey with our expert design and
            marketing touch. Where creativity meets strategy, success is
            inevitable.
          </p>
          <div className="flex flex-wrap items-center md:gap-12 md:justify-between w-full gap-7 mt-10 md:max-w-[500px] sm:mt-12 lg:mt-14">
            <Link
              href="/contact-us"
              className="px-5 py-3 font-visby600 whitespace-nowrap  sm:text-lg text-lg tracking-wide text-white rounded cursor-pointer transition-all ease duration-300  bg-primary-accent hover:bg-[#ff968f]"
            >
              Quick Message Form
            </Link>

            <div>
              <a
                href={contactInfo[2].link}
                className="flex items-center space-x-4 cursor-pointer link w-fit "
              >
                <FontAwesomeIcon
                  className="text-2xl lg:text-2xl text-primary-accent"
                  icon={contactInfo[2].icon}
                />
                <p
                  className={`text-lg  text-black-shade-300 tracking-wider font-semibold relative overflow-hidden lg:text-xl`}
                >
                  {contactInfo[2].title}
                  <span className="underline"></span>
                </p>
              </a>
            </div>
          </div>
        </section>
        <section className="margin-t bg-gradient-to-t from-[#FFE9E8] padding-y-lg lg:pb-32">
          <PortfolioSlider />
        </section>
        <section className="container-margin margin-t padding-y">
          <ServiceModule />
        </section>
        <section className="margin-t padding-y">
          <BrandModule />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
}
