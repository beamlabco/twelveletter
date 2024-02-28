import React from "react";
import Service from "./service";
import { serviceData } from "@/app/data/serviceData";

/* Dynamic SEO */
export async function generateMetadata({ params }) {
  // read route params
  const serviceId = params.serviceId;
  // Find the portfolio item based on the slug
  const selectedServiceData = serviceData[0].services.find(
    (service) => service.slug === serviceId
  );

  const description = selectedServiceData.brief;
  const serviceType = selectedServiceData.serviceType;

  return {
    title: `${serviceType}`,
    description: `${description}  Phone: +977 9802366500, Email: pranisha@twelveletter.co, Location: Kupondole, Lalitpur, Nepal`,
    keywords: ["Twelveletter", "Portfolio", serviceType, serviceType],
    alternates: {
      canonical: `/service/${serviceId}`,
    },
  };
}

export default function page() {
  return <Service />;
}
