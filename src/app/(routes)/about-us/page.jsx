import React from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import ContactModule from "@/app/components/contactModules/contactModule";
export default function aboutUs() {
  return (
    <>
      <div className="page-container">
        <PageTitle
          subHeading="About Us"
          heading="Discover Our Story: Exploring the Essence of Our Vision and Mission"
          textSize="large"
        />

        <div className="flex flex-col gap-10 mt-8 lg:mt-20 lg:gap-28">
          <section className="flex flex-col items-center gap-6 sm:gap-7 lg:flex-row lg:gap-11">
            <img
              className="w-full lg:w-1/2"
              src="/assets/AboutUs/aboutUsPic.png"
            ></img>
            <div>
              <h2 className="text-2xl font-medium sm:text-3xl lg:text-4xl sm:leading-tight text-black-shade-200">
                Your end goals are our No. 1 Priority
              </h2>
              <p className="mt-3 text-base leading-8 md:text-lg md:leading-9 md:mt-4 text-black-shade-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </section>
          <section className="flex flex-col items-center gap-6 mb-6 sm:gap-7 lg:flex-row-reverse lg:gap-11">
            <img
              className="w-full lg:w-1/2"
              src="/assets/AboutUs/aboutUsPic.png"
            ></img>
            <div>
              <h2 className="text-2xl font-medium sm:text-3xl lg:text-4xl sm:leading-tight text-black-shade-200">
                Your end goals are our No. 1 Priority
              </h2>
              <p className="mt-3 text-base leading-8 md:text-lg md:leading-9 md:mt-4 text-black-shade-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </section>
        </div>
      </div>
      <ContactModule />
    </>
  );
}
