"use client";
import { brandData } from "@/app/data/brandData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageTitle from "../pageTitle/pageTitle";

export default function brandModule() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="padding-y-lg overflow-x-hidden  bg-[#F5F5F7]">
      <div className="flex flex-col items-center w-full gap-5 pb-2 lg:gap-6 container-margin">
        <PageTitle
          heading="Brands We have Collaborated With"
          textSize="medium"
          highlightText="Connected Success:"
          extraClass="text-center lg:text-[2.7rem]"
          tag="h2"
        />
        <p className="text-center max-w-[600px] paragraph lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="w-full mt-6 mb-4 md:mt-14 lg:mt-12">
        <Slider {...settings}>
          {brandData?.map((brand, index) => (
            <figure
              key={index}
              className="flex items-center justify-center my-auto pointer-events-none select-none"
            >
              <img
                className="pointer-events-none max-w-36 sm:max-w-[270px]"
                src={brand?.icon}
                alt={brand?.name}
              />
            </figure>
          ))}
        </Slider>
      </div>
    </div>
  );
}
