import React from "react";
import Service from "./service";
export function generateStaticParams() {
  return [
    { serviceId: "digital-marketing" },
    { serviceId: "web-design-and-development" },
    { serviceId: "graphic-design-expertise" },
    { serviceId: "content-creation" },
    { serviceId: "in-house-photoshoot" },
  ];
}

export default function page() {
  return <Service />;
}
