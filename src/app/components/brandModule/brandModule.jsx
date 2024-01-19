import "./brandModule.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { brandData } from "@/app/data/brandData";
import Slider from "react-infinite-logo-slider";
import Image from "next/image";

export default function brandModule() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      autoPlay: true,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
      slidesToSlide: 2,
    },
    mobileL: {
      breakpoint: { max: 768, min: 540 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="padding-y-lg bg-[#F5F5F7]">
      <div className="flex flex-col items-center w-full gap-5 pb-2 lg:gap-6 container-margin">
        <p className="font-semibold tracking-wider text-center heading-medium">
          <span className="text-primary-accent">Connected Success:</span> Brands
          We have Collaborated With
        </p>
        <p className="text-center max-w-[500px] paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      {/*  <div className="w-full mt-6 mb-4 md:mt-14 lg:mt-16">
        <Carousel
          dotListClass="react-multi-carousel-dot-list"
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          transitionDuration={500}
          responsive={responsive}
          removeArrowOnDeviceType={["mobileL", "tablet", "mobile", "desktop"]}
          pauseOnHover={false}
          minimumTouchDrag={30}
          minimumSlideDrag={30}
          focusOnSelect={false}
          ssr={true}
          itemClass="brand-item"
        sliderClass="brand-menu-slider"
        >
          {brandData?.map((brand, index) => (
            <picture
              key={index}
              className="flex items-center justify-center my-auto pointer-events-none select-none"
            >
              <img
                className="pointer-events-none max-w-48 sm:max-w-40"
                src={brand?.icon}
                alt={brand?.name}
              />
            </picture>
          ))}
        </Carousel>
      </div> */}

      <div className="w-full mt-6 mb-4 md:mt-14 lg:mt-16">
        <Slider
          width="250px"
          duration={30}
          pauseOnHover={false}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          {brandData?.map((brand, index) => (
            <Slider.Slide key={index}>
              <figure className="flex items-center justify-center my-auto pointer-events-none select-none">
                <img
                  className="pointer-events-none max-w-40 sm:max-w-40"
                  src={brand?.icon}
                  alt={brand?.name}
                />
              </figure>
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </div>
  );
}
