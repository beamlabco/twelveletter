"use client";
import React from "react";
import portfolioData from "@/app/data/portfolioData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./swiperoverride.css";

import Link from "next/link";
function addCategorySlugsToPortfolioItems(data) {
  return data.map((categoryItem) => {
    const categorySlug = categoryItem.categorySlug;
    const portfolioItemsWithCategorySlug = categoryItem.portfolioItems.map(
      (portfolioItem) => {
        return {
          ...portfolioItem,
          categorySlug: categorySlug,
        };
      }
    );

    return {
      ...categoryItem,
      portfolioItems: portfolioItemsWithCategorySlug,
    };
  });
}
// Use the function to add categorySlug to portfolioData
const portfolioDataWithCategorySlugs =
  addCategorySlugsToPortfolioItems(portfolioData);

// Flatten the data to get simplifiedPortfolioData
const simplifiedPortfolioData = portfolioDataWithCategorySlugs.flatMap(
  (category) => category.portfolioItems
);

export default function PortfolioSlider(props) {
  const { inverse, startIndex, endIndex } = props;

  return (
    <>
      <div>
        <Swiper
          className="sample-slider"
          modules={[Autoplay]}
          loop={true}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: inverse ? inverse : false,
          }}
          slidesPerView={2}
          speed={10000}
          breakpoints={{
            540: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {simplifiedPortfolioData.slice(0, 5).map((portfolio, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="flex items-center justify-center px-3 md:px-5 lg:px-6 max-w-[350px] lg:max-w-[420px]"
                >
                  <Link
                    title={portfolio.title}
                    href={`/portfolio/${portfolio.categorySlug}/${portfolio.slug}`} // Include category slug
                  >
                    <img
                      title={portfolio.title}
                      className="transition-all duration-200 rounded-md hover:group hover:shadow-md"
                      src={portfolio.image}
                      alt={portfolio.title}
                    />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mt-8 lg:mt-16 ">
        <Swiper
          className="sample-slider"
          modules={[Autoplay]}
          loop={true}
          allowTouchMove={false}
          autoplay={{
            delay: 0,

            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: true,
          }}
          slidesPerView={2}
          speed={10000}
          breakpoints={{
            540: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {simplifiedPortfolioData.slice(0, 5).map((portfolio, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="flex items-center justify-center px-3 md:px-5 lg:px-6 max-w-[350px] lg:max-w-[420px]"
                >
                  <Link
                    title={portfolio.title}
                    href={`/portfolio/${portfolio.categorySlug}/${portfolio.slug}`} // Include category slug
                  >
                    <img
                      title={portfolio.title}
                      className="transition-all duration-200 rounded-md hover:group hover:shadow-md"
                      src={portfolio.image}
                      alt={portfolio.title}
                    />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
