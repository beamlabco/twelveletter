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
            className="w-full lg:w-1/2"
            src="/assets/AboutUs/aboutUsPic.png"
          ></img>
          <div>
            <h2 className="tracking-wide heading-medium">
              Your end goals are our No. 1 Priority
            </h2>
            <p className="mt-3 paragraph md:mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center gap-6 mb-6 sm:gap-7 lg:flex-row-reverse lg:gap-11">
          <img
            className="w-full lg:w-1/2"
            src="/assets/AboutUs/aboutUsPic.png"
          ></img>
          <div>
            <h2 className="tracking-wide heading-medium">
              Your end goals are our No. 1 Priority
            </h2>
            <p className="mt-3 paragraph md:mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </section>
      </div>

      <ContactModule />
    </>
  );
}
