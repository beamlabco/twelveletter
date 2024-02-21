import React from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import ContactModule from "@/app/components/contactModules/contactModule";
export default function aboutUs() {
  return (
    <>
      <section className="container-margin top-section-p">
        <PageTitle
          subHeading="About Us"
          heading="Discover Our Story: Exploring the Essence of Our Vision and Mission"
          textSize="large"
        />
      </section>
      <div className="flex flex-col gap-10 page-container margin-t lg:gap-28">
        <section className="flex flex-col items-center gap-6 sm:gap-7 lg:flex-row lg:gap-11">
          <img
            alt="aboutUs"
            className="w-full lg:w-1/2"
            src="/assets/AboutUs/AboutUsPic.png"
          ></img>
          <div>
            <h2 className="tracking-wide heading-medium">
              Understanding Our Vision
            </h2>
            <p className="mt-3 paragraph md:mt-4">
              At Twelveletter, we blend creativity with technology to create
              digital experiences that resonate. Our team is committed to
              pushing boundaries and delivering unparalleled results. Our
              mission is simple: empower brands to thrive in today's digital
              landscape. With our expertise and dedication, we exceed
              expectations and unlock your brand's full potential.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center gap-6 mb-6 sm:gap-7 lg:flex-row-reverse lg:gap-11">
          <img
            alt="aboutUs"
            className="w-full lg:w-1/2"
            src="/assets/AboutUs/AboutUsPic.png"
          ></img>
          <div>
            <h2 className="tracking-wide heading-medium">
              Your end goals are our No. 1 Priority
            </h2>
            <p className="mt-3 paragraph md:mt-4">
              At Twelveletter, we're on a journey to revolutionize digital
              marketing. We're driven by a simple belief: every brand deserves
              to shine. With creativity and dedication, we're here to make that
              happen. Join us as we redefine the future of digital together.
            </p>
          </div>
        </section>
      </div>

      <ContactModule />
    </>
  );
}
