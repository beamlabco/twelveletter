import React from "react";

export default function Title(props) {
  const {
    subHeading,
    heading,
    highlightTextEnd,
    highlightText,
    highlightGradient,
    textSize,
    extraClass,
    maxWidth,
  } = props;

  const determineTextSize = () => {
    switch (textSize) {
      case "small":
        return "text-xl mt-2 font-semibold tracking-wider md:text-3xl text-black-shade-300";
      case "medium":
        return "mt-2 lg:mt-3 text-2xl font-semibold tracking-wide sm:text-3xl lg:text-4xl";
      case "large":
        return "text-3xl mt-3 font-semibold leading-10 tracking-wide md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug text-black-shade-300";
      case "xl":
        return "text-4xl mt-3 font-semibold leading-tight tracking-wide md:text-5xl md:leading-snug lg:text-6xl lg:leading-tight text-black-shade-300";
      default:
        return "";
    }
  };

  return (
    <div className={`${maxWidth ? maxWidth : ""}`}>
      {subHeading && (
        <h1 className="text-base font-semibold tracking-widest md:text-lg font-base text-primary-accent">
          {subHeading}
        </h1>
      )}
      <p className={`${determineTextSize()} ${extraClass}`}>
        {highlightText ? (
          <span
            className={`${extraClass} ${
              highlightGradient ? "gradient" : "text-primary-accent"
            }`}
          >
            {highlightText}{" "}
          </span>
        ) : (
          ""
        )}
        {heading}
        {highlightTextEnd ? (
          <span
            className={`${extraClass} ${
              highlightGradient ? "gradient" : "text-primary-accent"
            }`}
          >
            {highlightTextEnd}
          </span>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
