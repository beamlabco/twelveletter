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

      <div className="w-full mt-6 mb-4 brand md:mt-14 lg:mt-12 ">
        <Swiper
          className="sample-slider"
          modules={[Autoplay]}
          loop={true}
          allowTouchMove={false}
          preventClicks={false}
          spaceBetween={50}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: false,
          }}
          slidesPerView={2}
          speed={9000}
          breakpoints={{
            540: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 150,
            },
          }}
        >
          {brandData?.map((brand, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="flex items-center justify-center h-full max-h-[100%] pointer-events-none"
                  style={{ height: "120px" }}
                >
                  <img
                    className="object-contain object-center h-full"
                    title={brand?.name}
                    src={brand?.icon}
                    alt={brand?.name}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
