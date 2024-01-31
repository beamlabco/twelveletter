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
        return "text-xl mt-2 font-visby600  md:text-3xl text-black-shade-300";
      case "medium":
        return "mt-2 font-visby600 lg:mt-3 text-2xl sm:text-3xl lg:text-4xl leading-8 md:leading-9 lg:leading-snug";
      case "large":
        return "text-3xl mt-3 font-visby700 leading-10  md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug text-black-shade-300";
      case "xl":
        return "text-4xl mt-3 font-visby700 leading-tight md:text-5xl md:leading-snug lg:text-[68px] text-black-shade-300";
      default:
        return "";
    }
  };

  return (
    <div className={`${maxWidth ? maxWidth : ""}`}>
      {subHeading && (
        <h1 className="text-base tracking-wide font-visby600 md:text-lg font-base text-primary-accent">
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
