"use client";

import React, { useState, useRef, useEffect } from "react";
import PageTitle from "../pageTitle/pageTitle";
import { homeServiceData } from "@/app/data/serviceData";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceModule() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentItemIndex(
          (prevIndex) => (prevIndex + 1) % homeServiceData.length
        );
      }
    }, 4000);
  };

  const handleTitleClick = (index) => {
    setIsPaused(true);
    setCurrentItemIndex(index);

    // Restart the interval after 5 seconds
    setTimeout(() => {
      setIsPaused(false);
      startInterval();
    }, 5000);
  };

  return (
    <div>
      <section>
        <PageTitle
          highlightText="Amplify Your Presence: "
          highlightGradient={true}
          textSize="large"
          subHeading="Services"
          heading="Tailored Design and Marketing Expertise for a Polished Professional Image."
        />
      </section>
      <section className="w-full padding-y margin-t">
        <div className="relative items-center justify-between hidden w-full gap-10 lg:gap-20 md:flex">
          {/* Left side: List of titles */}
          <div className="relative md:max-w-[300px] lg:max-w-[350px] xl:max-w-full w-full">
            <ul className="flex flex-col md:gap-8 lg:gap-10">
              {homeServiceData.map((item, index) => (
                <li
                  key={item.id}
                  onClick={() => handleTitleClick(index)}
                  className={`lg:text-2xl md:text-xl whitespace-nowrap hover:text-primary-accent transition-all duration-200 font-semibold tracking-wider cursor-pointer ${
                    index === currentItemIndex
                      ? "text-primary-accent lg:text-[1.8rem]"
                      : "text-black-shade-300"
                  }`}
                >
                  <FontAwesomeIcon
                    className={`text-base transition-all duration-200 lg:text-2xl mr-4 ${
                      index === currentItemIndex
                        ? "text-primary-accent lg:text-[1.8rem]"
                        : "text-transparent"
                    }`}
                    icon={faRightLong}
                  />
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: Respective images */}
          <div className="relative w-full h-full lg:mr-20 xl:mr-48">
            {homeServiceData.map((item, index) => (
              <div className="flex flex-col" key={item.id}>
                <figure
                  className={`max-w-[580px] w-full h-full transition-opacity duration-500 ${
                    index === currentItemIndex ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    display: index === currentItemIndex ? "block" : "none",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto mx-auto"
                  />
                </figure>
                <p
                  style={{
                    display: index === currentItemIndex ? "block" : "none",
                  }}
                  className="text-xl leading-relaxed tracking-wide text-black-shade-100"
                >
                  {item.brief}
                  <a
                    href={`/service/${item.slug}`}
                    className="tracking-wider transition-all duration-200 text-primary-accent hover:text-[#FF9E95] text-wiggle"
                  >
                    Read More
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:hidden">
          <ul className="flex flex-col gap-4 lg:gap-10">
            {homeServiceData.map((item, index) => (
              <li
                key={item.id}
                onClick={() => handleTitleClick(index)}
                className={`text-2xl w-fit hover:text-primary-accent transition-all duration-200 font-semibold tracking-wider cursor-pointer ${
                  index === currentItemIndex
                    ? "text-primary-accent lg:text-[1.8rem]"
                    : "text-black-shade-300"
                }`}
              >
                <a href={`/service/${item.slug}`}>
                  <FontAwesomeIcon
                    className={`text-xl transition-all duration-200 lg:text-2xl mr-3 ${
                      index === currentItemIndex
                        ? "text-primary-accent lg:text-[1.8rem]"
                        : "hidden"
                    }`}
                    icon={faRightLong}
                  />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
