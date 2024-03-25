import React from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import ContactModule from "@/app/components/contactModules/contactModule";

export const metadata = {
  title: "Discover Our Visions",
  description:
    "At Twelveletter, we blend creativity with technology to create digital experiences that resonate. Our team is committed to pushing boundaries and delivering unparalleled results.",
  keywords: [
    "Twelveletter",
    "digital experiences",
    "brand empowerment",
    "digital marketing",
    "vision and mission",
  ],
  alternates: {
    canonical: "/about-us",
  },
};

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
            title="aboutUs"
            alt="team"
            className="w-full lg:w-1/2"
            src="/assets/AboutUs/team.webp"
          ></img>
          <div>
            <h2 className="text-2xl font-bold tracking-wide md:text-4xl text-black-shade-300">
              Understanding Our Vision
            </h2>
            <p className="mt-2 paragraph md:mt-4">
              At Twelveletter, we blend creativity with technology to create
              digital experiences that resonate. Our team is committed to
              pushing boundaries and delivering unparalleled results. Our
              mission is simple: empower brands to thrive in today&apos;s
              digital landscape. With our expertise and dedication, we exceed
              expectations and unlock your brand&apos;s full potential.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center gap-6 mb-6 sm:gap-7 lg:flex-row-reverse lg:gap-11">
          <img
            title="aboutUs"
            alt="End goal"
            className="w-full lg:w-1/2"
            src="/assets/AboutUs/end-goal.webp"
          ></img>
          <div>
            <h2 className="text-2xl font-bold tracking-wide md:text-4xl text-black-shade-300">
              Your end goals are our No. 1 Priority
            </h2>
            <p className="mt-2 paragraph md:mt-4">
              At Twelveletter, we&apos;re on a journey to revolutionize digital
              marketing. We&apos;re driven by a simple belief: every brand
              deserves to shine. With creativity and dedication, we&apos;re here
              to make that happen. Join us as we redefine the future of digital
              together.
            </p>
          </div>
        </section>
      </div>

      <ContactModule />
    </>
  );
}
