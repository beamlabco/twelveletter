"use client";

import { useParams } from "next/navigation";
import PageTitle from "../../../components/pageTitle/pageTitle";
import { serviceData } from "@/app/data/serviceData";
import { useState, useEffect } from "react";
import ContactModule from "@/app/components/contactModules/contactModule";
import BrandModule from "@/app/components/brandModule/brandModule";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Testimonial from "@/app/components/testimonial/testimonial";
import RecommendPortfolio from "@/app/components/recommendPortfolio/recommendPortfolio";

export default function Service() {
  const params = useParams();
  const serviceId = params.serviceId;
  const [service, setService] = useState();

  /*  useEffect(() => {
    // Fetch the service data based on serviceId (or slug)
    const fetchData = async () => {
      try {
        const selectedServiceData = serviceData[0].services.find(
          (service) => service.slug === serviceId
        );

        if (selectedServiceData) {
          setService(selectedServiceData);
        } else {
          // Handle case where serviceId doesn't match any service
          console.error(`Service with id ${serviceId} not found.`);
        }
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchData();
  }, [serviceId]); */

  const selectedServiceData = serviceData[0].services.find(
    (service) => service.slug === serviceId
  );

  return (
    <>
      <section className="container-margin top-section-p">
        <PageTitle
          subHeading={selectedServiceData?.serviceType}
          textSize="large"
          heading={selectedServiceData?.title}
        />
        <p className="mt-6 paragraph lg:max-w-[1100px]">
          {selectedServiceData?.brief}
        </p>
      </section>
      {/* Features section */}
      <section className="container-margin padding-y margin-t">
        <div className="flex flex-col items-center gap-10 lg:gap-16 ">
          <p className="text-3xl lg:text-[2.6rem] font-semibold tracking-wider text-center">
            What's <span className=" text-primary-accent">Included?</span>
          </p>
          <div className="grid grid-cols-1 mt-2 md:grid-cols-2 md:gap-x-10 lg:gap-x-28 gap-y-14">
            {selectedServiceData?.features?.map((feature, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "md:mt-0" : "md:mt-16"
                } flex flex-col  max-w-[450px]`}
              >
                <picture
                  aria-label={feature ? feature.title : "Icon"}
                  aria-description={feature.title}
                  className="w-16 mb-6 lg:w-20"
                >
                  <img src={feature?.icon} />
                </picture>
                <h3 className="heading-small lg:font-semibold text-primary-accent">
                  {feature.title}
                </h3>
                <p className="mt-2 paragraph">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Brand partners */}
      <section className="padding-y margin-t">
        <BrandModule />
      </section>
      {/* Benefits section */}
      <section className="margin-t padding-y">
        <div className="flex container-margin lg:max-w-[1200px] flex-col gap-6 lg:flex-row lg:gap-4">
          <picture className="flex items-center justify-center w-full">
            <img
              className="md:max-w-[600px] lg:max-w-[500px] xl:max-w-xl"
              src={selectedServiceData?.benefits.image}
            ></img>
          </picture>
          <div className="flex flex-col gap-3 lg:gap-4 md:px-11">
            <h3 className="font-semibold tracking-wider heading-medium text-black-shade-300">
              {selectedServiceData?.benefits.title}
            </h3>
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
      <section className="margin-t padding-y">
        <Testimonial />
      </section>
      <section className="margin-t padding-y">
        <RecommendPortfolio />
      </section>
      <ContactModule />
    </>
  );
}
