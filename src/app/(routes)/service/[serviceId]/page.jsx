"use client";

import { useParams } from "next/navigation";
import PageTitle from "../../../components/pageTitle/pageTitle";
import { serviceData } from "@/app/data/serviceData";
import { useState, useEffect } from "react";

export default function Service() {
  const params = useParams();
  const serviceId = params.serviceId;
  const [service, setService] = useState();

  useEffect(() => {
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
  }, [serviceId]);

  return (
    <>
      <section className="page-container">
        <PageTitle
          subHeading={service?.serviceType}
          textSize="large"
          heading={service?.title}
        />
        <p className="mt-6 paragraph lg:max-w-[1000px]">{service?.brief}</p>
      </section>
      <section className="flex flex-col items-center gap-10 lg:gap-16 min-h-72 container-margin section">
        <p className="text-3xl lg:text-[2.6rem] font-semibold tracking-wider text-center">
          What's{" "}
          <span className="text-3xl lg:text-5xl text-primary-accent">
            Included?
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-28 gap-y-14">
          {service?.features?.map((feature, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "md:mt-0" : "md:mt-16"
              } flex flex-col  max-w-[450px]`}
            >
              <picture
                aria-label={feature ? feature.title : "Icon"}
                aria-description={feature.title}
                className="w-20 mb-6 lg:w-20"
              >
                <img src={feature?.icon} />
              </picture>
              <h3 className="text-xl font-semibold tracking-wider lg:text-2xl text-primary-accent">
                {feature.title}
              </h3>
              <p className="mt-2 paragraph">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
