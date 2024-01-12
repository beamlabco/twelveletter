import "./brandModule.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { brandData } from "@/app/data/brandData";

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
    <div className="padding-y bg-[#F5F5F7]">
      <div className="flex flex-col items-center w-full gap-6 pb-2 container-margin">
        <h3 className="text-2xl font-semibold tracking-wider text-center md:text-4xl font-base text-black-shade-300">
          <span className="text-primary-accent">Connected Success:</span> Brands
          We've Collaborated With
        </h3>
        <p className="text-center max-w-[500px] paragraph ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="w-full mt-12 mb-4 md:mt-14 lg:mt-16">
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
        >
          {brandData?.map((brand, index) => (
            <picture
              key={index}
              className="flex items-center justify-center my-auto"
            >
              <img className="max-w-40" src={brand?.icon} alt={brand?.name} />
            </picture>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
