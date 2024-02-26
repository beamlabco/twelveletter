"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import PageTitle from "../pageTitle/pageTitle";
import { homeServiceData } from "@/app/data/serviceData";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ServiceModule() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: "500",
      easing: "ease-in-out",
      once: true,
    });
  });

  const startInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentItemIndex(
          (prevIndex) => (prevIndex + 1) % homeServiceData.length
        );
      }
    }, 4000);
  }, [isPaused]);

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused, startInterval]);

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
      <section data-aos="fade-in">
        <PageTitle
          highlightText="Amplify Your Presence: "
          highlightGradient={true}
          textSize="large"
          subHeading="Services"
          heading="Tailored Design and Marketing Expertise for a Polished Professional Image."
        />
      </section>
      <section className="w-full mt-8 padding-y md:mt-10 lg:mt-12">
        <div className="relative items-center justify-between hidden w-full gap-10 lg:gap-20 md:flex">
          {/* Left side: List of titles */}
          <div
            data-aos="fade-right"
            className="relative md:max-w-[300px] lg:max-w-[350px] xl:max-w-full w-full h-fit"
          >
            <ul className="flex flex-col md:gap-8 lg:gap-10">
              {homeServiceData.map((item, index) => (
                <li
                  key={item.id}
                  onClick={() => handleTitleClick(index)}
                  className={`lg:text-[1.75rem] w-fit md:text-xl whitespace-nowrap ease-in hover:text-primary-accent transition-all duration-200 font-extrabold font-manrope cursor-pointer ${
                    index === currentItemIndex
                      ? "text-primary-accent md:text-[1.8rem] lg:text-[1.8rem]"
                      : "text-black-shade-200"
                  }`}
                >
                  <FontAwesomeIcon
                    className={`text-2xl transition-all duration-200 lg:text-2xl mr-3 ${
                      index === currentItemIndex
                        ? "text-primary-accent lg:text-[2rem]"
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
          <div
            data-aos="fade-left"
            className="relative w-full h-full lg:mr-20 xl:mr-48"
          >
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
                  className="text-lg  [word-spacing:2px] font-manrope text-black-shade-100"
                >
                  {item.brief}
                  <Link
                    href={`/service/${item.slug}`}
                    className="tracking-wider transition-all duration-200 text-primary-accent hover:text-[#FF9E95] text-wiggle"
                  >
                    Read More
                  </Link>
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
                <Link href={`/service/${item.slug}`}>
                  <FontAwesomeIcon
                    className={`text-xl transition-all duration-200 lg:text-3xl mr-2 ${
                      index === currentItemIndex
                        ? "text-primary-accent lg:text-[1.8rem]"
                        : "hidden"
                    }`}
                    icon={faRightLong}
                  />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
