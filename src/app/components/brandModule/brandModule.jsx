"use client";
import { brandData } from "@/app/data/brandData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../homeModules/swiperoverride.css";
import PageTitle from "../pageTitle/pageTitle";

export default function brandModule() {
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

      <div className="w-full mt-6 mb-4 md:mt-14 lg:mt-12 ">
        <Swiper
          className="sample-slider"
          modules={[Autoplay]}
          loop={true}
          allowTouchMove={false}
          spaceBetween={20}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: false,
          }}
          slidesPerView={2}
          speed={10000}
          breakpoints={{
            540: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
        >
          {brandData?.map((brand, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  title={brand?.name}
                  className="pointer-events-none w-full max-w-40 sm:max-w-[270px]"
                  src={brand?.icon}
                  alt={brand?.name}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
