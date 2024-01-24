"use client";
import React from "react";
import { portfolioData } from "@/app/data/portfolioData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function portfolioSlider() {
  const commonSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToScroll: 0.1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          pauseOnHover: true,
        },
      },
    ],
  };

  const rtlSettings = {
    ...commonSettings,
    rtl: true,
  };

  return (
    <div className="flex flex-col gap-8 overflow-x-hidden lg:gap-20">
      <Slider {...commonSettings}>
        {portfolioData?.map((portfolio, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-3 md:px-5 lg:px-1 max-w-[350px] lg:max-w-[470px]"
          >
            <Link href={`/portfolio/showcase/${portfolio.slug}`}>
              <img
                className="rounded-md "
                src={portfolio?.image}
                alt={portfolio?.title}
              />
            </Link>
          </div>
        ))}
      </Slider>
      <Slider {...rtlSettings}>
        {portfolioData?.map((portfolio, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-3 md:px-5 lg:px-1 max-w-[350px] lg:max-w-[470px]"
          >
            <Link className="" href={`/portfolio/showcase/${portfolio.slug}`}>
              <img
                className="rounded-md "
                src={portfolio?.image}
                alt={portfolio?.title}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
