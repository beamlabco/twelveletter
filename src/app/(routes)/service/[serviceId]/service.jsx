"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import PageTitle from "../../../components/pageTitle/pageTitle";
import { serviceData } from "@/app/data/serviceData";
import ContactModule from "@/app/components/contactModules/contactModule";
import BrandModule from "@/app/components/brandModule/brandModule";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Testimonial from "@/app/components/testimonial/testimonial";
import RecommendPortfolio from "@/app/components/recommendPortfolio/recommendPortfolio";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Service() {
  const params = useParams();
  const serviceId = params.serviceId;

  const selectedServiceData = serviceData[0].services.find(
    (service) => service.slug === serviceId
  );

  useEffect(() => {
    Aos.init({
      duration: "1000",
      easing: "ease-in-out",
      once: true,
    });
  });

  const title = selectedServiceData?.title;
  const colonIndex = title.indexOf(":");
  const highlightedText = title.substring(0, colonIndex + 1).trim();
  const heading = title.substring(colonIndex + 1).trim();

  return (
    <div className="overflow-hidden">
      <section className="flex flex-col relative justify-center min-h-[68vh] md:min-h-[84vh] ">
        <div className="container-margin-compact">
          <PageTitle
            subHeading={selectedServiceData?.serviceType}
            textSize="xl"
            extraClass="text-2xl"
            highlightGradient={true}
            heading={heading}
            highlightText={highlightedText}
          />
          <p className="text-lg [word-spacing:2px] font-manrope leading-normal md:text-[20px] font-semibold md:leading-9 max-w-[1100px] mt-7 lg:mt-9 text-black-shade-200">
            {selectedServiceData?.brief}
          </p>
        </div>
      </section>
      {/* Features section */}
      <section className="relative margin-t">
        <div className="absolute overflow-x-hidden z-0 w-full min-h-screen overflow-hidden blur-[100px]">
          <div className="absolute top-0 right-0 w-16 h-16 opacity-60"></div>
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            className="absolute w-full h-full"
          >
            <div className="absolute bottom-[-200px] bg-[#0084ff5e] h-[300px] w-[300px] left-[70px] lg:h-[700px] lg:w-[700px] opacity-50 lg:left-[-300px] lg:bottom-[-500px]"></div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            className="absolute w-full h-full"
          >
            <div className="absolute h-[500px] w-[500px] right-[-350px] top-[-300px] lg:h-[700px] lg:w-[700px] lg:right-[-400px] opacity-30 lg:top-[-400px] bg-primary-accent"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 md:gap-10 container-margin lg:gap-16 ">
          <h2 className="text-3xl lg:text-[3rem] font-semibold tracking-wider text-center">
            What&apos;s <span className=" text-primary-accent">Included?</span>
          </h2>
          <div className="grid grid-cols-1 mt-2 md:grid-cols-2 md:gap-x-10 lg:gap-x-36 gap-y-14">
            {selectedServiceData?.features?.map((feature, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className={`${
                  index % 2 === 0 ? "md:mt-0" : "md:mt-16"
                } flex flex-col  max-w-[450px]`}
              >
                <picture className="w-16 mb-2 lg:mb-4 lg:w-[5rem]">
                  <img alt={feature.title} src={feature?.icon} />
                </picture>
                <h3 className="font-medium heading-small text-primary-accent">
                  {feature.title}
                </h3>
                <p className="mt-2 paragraph">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Brand partners */}
      <section className="mt-8 md:mt-32 padding-y">
        <BrandModule />
      </section>
      {/* Benefits section */}
      <section data-aos="fade-in" className="margin-t padding-y">
        <div className="flex items-center container-margin lg:max-w-[1200px] flex-col gap-6 lg:flex-row lg:gap-4">
          <picture
            data-aos="fade-right"
            className="flex items-center justify-center w-full"
          >
            <img
              alt={selectedServiceData?.benefits.title}
              className="md:max-w-[600px] lg:max-w-[500px] xl:max-w-xl"
              src={selectedServiceData?.benefits.image}
            ></img>
          </picture>
          <div
            data-aos="fade-left"
            className="flex flex-col gap-3 lg:gap-4 md:px-11"
          >
            <h2 className="font-semibold tracking-wider heading-medium text-black-shade-300">
              {selectedServiceData?.benefits.title}
            </h2>
            <p className="paragraph">
              {selectedServiceData?.benefits.description}
            </p>
            <ul className="list-inside ">
              {selectedServiceData?.benefits?.bulletPoints?.map(
                (point, index) => (
                  <li key={index} className="flex items-center gap-3 paragraph">
                    <FontAwesomeIcon color="#FF867A" icon={faCheck} />
                    {point}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section data-aos="fade-in" className="margin-t ">
        <Testimonial />
      </section>
      <section data-aos="fade-in" className="margin-t padding-y">
        <RecommendPortfolio />
      </section>
      <ContactModule />
    </div>
  );
}
