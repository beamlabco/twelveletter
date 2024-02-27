"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Testimonial from "@/app/components/testimonial/testimonial";
import ContactModule from "@/app/components/contactModules/contactModule";
import { useParams } from "next/navigation";
import { portfolioData } from "@/app/data/portfolioData";
import { useRouter } from "next/navigation";
import RecommendPortfolio from "@/app/components/recommendPortfolio/recommendPortfolio";
import Aos from "aos";
import "aos/dist/aos.css";
import PDFSlide from "../../(components)/pdfSlide";

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const portfolioSlug = params.portfolioSlug;

  // Find the portfolio item based on the slug
  const portfolioItem = portfolioData.find(
    (item) => item.slug === portfolioSlug
  );

  useEffect(() => {
    Aos.init({
      duration: "500",
      easing: "ease-in-out",
      once: true,
    });
  });

  if (!portfolioItem) {
    return <p>Portfolio not found</p>;
  }

  const { title, briefTitle, brief, description, category, image } =
    portfolioItem;

  return (
    <>
      <section className="relative">
        <div className="absolute w-full h-2/3 -z-10 bg-[#FFF0EE]" />
        <div className="flex flex-col items-center justify-center container-margin">
          <button
            data-aos="fade-left"
            onClick={() => router.back()}
            className="self-start mt-10 mb-8 text-xl font-semibold tracking-wide sm:mt-12 text-primary-accent"
          >
            <FontAwesomeIcon size="sm" icon={faArrowLeft} />
            &nbsp; Go Back
          </button>
          <div>
            <h1 className="font-semibold tracking-wide text-center text-black-shade-300 heading-medium">
              {title}
            </h1>
            <p className="mt-1 text-sm font-medium tracking-wider text-center sm:text-base sm:mt-2 text-primary-accent">
              {category}
            </p>
          </div>
          <p className="mt-3 sm:mt-5 text-lg tracking-wide font-medium text-center max-w-[480px] text-black-shade-200">
            {description}
          </p>
          <figure className="relative w-full max-w-2xl mt-6 overflow-hidden rounded-md shadow-md sm:mt-10">
            <img alt={title} className="w-full h-full" src={image}></img>
          </figure>
        </div>
      </section>
      <section className="flex flex-col items-center w-full padding-y margin-t container-margin">
        <div className="w-full max-w-[1000px]">
          <span className="text-sm font-semibold tracking-widest md:text-lg font-base text-primary-accent">
            Project brief
          </span>
          <h3 className="mt-1 font-semibold tracking-wider text-black-shade-200 sm:mt-2 heading-medium">
            {briefTitle}
          </h3>
          <p className="mt-2 font-medium leading-relaxed tracking-wide sm:mt-4 text-black-shade-200 paragraph">
            {brief}
          </p>
        </div>
      </section>
      <section
        data-aos="fade-in"
        className="flex justify-center w-full padding-y margin-t"
      >
        <div className="w-full flex flex-col gap-14 md:gap-20 overflow-hidden lg:rounded-md md:px-5  max-w-[1000px]">
          {portfolioItem?.media.map((mediaItem, index) => (
            <div key={index} className="mb-10">
              {mediaItem?.type === "image" && (
                <img alt={title} className="w-full" src={mediaItem.url} />
              )}

              {mediaItem?.type === "slider" && (
                <>
                  <h3 className="text-3xl font-semibold text-center mb-7 md:text-4xl text-black-shade-300 md:mb-10">
                    <span className="text-primary-accent">Brand</span>{" "}
                    Guidelines
                  </h3>
                  <PDFSlide
                    url={mediaItem.url}
                    numberOfImages={mediaItem.numberOfImages}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      <section data-aos="fade-in" className="margin-t padding-y">
        <Testimonial />
      </section>
      <section data-aos="fade-in" className="margin-t padding-y">
        <RecommendPortfolio />
      </section>
      <ContactModule />
    </>
  );
}
