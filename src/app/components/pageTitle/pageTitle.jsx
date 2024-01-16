import React from "react";

export default function Title(props) {
  const { subHeading, heading, highlightText, highlightGradient, textSize } =
    props;

  const determineTextSize = () => {
    switch (textSize) {
      case "small":
        return "text-xl font-semibold tracking-wider md:text-3xl text-black-shade-300";
      case "medium":
        return "text-2xl font-semibold  leading-snug tracking-wide sm:text-3xl lg:text-4xl";
      case "large":
        return "text-3xl font-semibold leading-10 tracking-wide md:text-4xl md:leading-snug lg:text-5xl lg:leading-tight text-black-shade-300";
      default:
        return "";
    }
  };

  return (
    <div>
      <h1 className="mb-4 text-base font-semibold tracking-widest md:text-xl font-base text-primary-accent">
        {subHeading}
      </h1>
      <p className={determineTextSize()}>
        {highlightText ? (
          <span
            className={`${
              highlightGradient ? "gradient" : "text-primary-accent"
            }`}
          >
            {highlightText}{" "}
          </span>
        ) : (
          ""
        )}
        {heading}
      </p>
    </div>
  );
}
