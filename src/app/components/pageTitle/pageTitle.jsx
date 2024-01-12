import React from "react";

export default function Title(props) {
  const { subHeading, heading, highlight, textSize } = props;

  const renderHighlight = () => {
    if (highlight) {
      return <span>{highlight}</span>;
    }
    return null;
  };

  const determineTextSize = () => {
    switch (textSize) {
      case "small":
        return "mt-3 text-2xl font-semibold tracking-wider md:text-3xl font-base text-black-shade-300";
      case "medium":
        return "mt-4 text-[1.7rem] font-semibold leading-10 tracking-wide md:text-4xl md:leading-snug lg:text-[2.6rem] text-black-shade-300";
      case "large":
        return "mt-4 text-3xl font-semibold leading-10 tracking-wide md:text-4xl md:leading-snug lg:text-5xl lg:leading-tight text-black-shade-300";
      default:
        return ""; // Default size or handle additional cases as needed
    }
  };

  return (
    <div>
      <h1 className="text-base font-semibold tracking-wider md:text-xl font-base text-primary-accent">
        {subHeading}
      </h1>
      <p className={determineTextSize()}>{heading}</p>
    </div>
  );
}
