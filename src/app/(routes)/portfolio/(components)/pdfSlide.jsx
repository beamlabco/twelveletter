import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css/effect-creative";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./pdfCarouseloverride.css";

export default function PdfSlide(props) {
  const { url, numberOfImages } = props;

  // Generate an array of image URLs
  const imageUrls = Array.from(
    { length: numberOfImages },
    (_, index) => `${url}-${index + 1}.webp`
  );

  return (
    <div className="pdfslide">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, EffectCreative, Navigation]}
        className="mySwiper"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
      >
        {imageUrls.map((imageUrl, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="flex items-center justify-center w-full select-none"
                key={index}
              >
                <img
                  title={`Slide ${index}`}
                  src={imageUrl}
                  className="w-full max-w-[850px] h-auto m-auto rounded-sm"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
