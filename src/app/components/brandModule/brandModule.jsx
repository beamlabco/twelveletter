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
      breakpoint: { max: 540, 540: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="section bg-[#F5F5F7] ">
      <div className="padding-y">
        <div className="flex flex-col items-center w-full ">
          <h3 className="text-lg font-semibold tracking-wider text-center md:text-4xl font-base text-black-shade-300">
            <span className="text-primary-accent">Connected Success:</span>{" "}
            Brands We've Collaborated With
          </h3>
          <p className="text-center max-w-[500px] paragraph ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="w-full mt-16 mb-4 ">
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
              <picture key={index} className="flex items-center justify-center">
                <img
                  className="w-full max-w-40"
                  src={brand?.icon}
                  alt={brand?.name}
                />
              </picture>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
