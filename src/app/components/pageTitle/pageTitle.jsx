import React from "react";

export default function pageTitle(props) {
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-wider md:text-xl font-base text-primary-accent">
        {props.subHeading}
      </h1>
      <p className="mt-4 text-3xl font-semibold leading-10 tracking-wide md:text-4xl md:leading-tight lg:text-6xl lg:leading-tight text-black-shade-300">
        {props.heading}
      </p>
    </div>
  );
}
