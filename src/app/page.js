"use client";
import Contact from "./(routes)/contact-us/contact";
import BrandModule from "./components/brandModule/brandModule";
import ServiceModule from "./components/homeModules/serviceModule";
import PageTitle from "./components/pageTitle/pageTitle";

export default function Home() {
  return (
    <>
      <div>
        <section className="container-margin lg:pt-24 lg:pb-16">
          <PageTitle
            highlightTextEnd="Your Success, Our Mission"
            textSize="xl"
            heading="Designing Dreams, Marketing Reality: "
            extraClass="leading-[1.3]"
          />
          <p className="text-xl font-semibold leading-10 tracking-wide max-w-[1200px] lea lg:mt-10 text-black-shade-100">
            Infuse brilliance into your brand journey with our expert design and
            marketing touch. Where creativity meets strategy, success is
            inevitable.
          </p>
        </section>
        <section className="container-margin margin-t padding-y">
          <ServiceModule />
        </section>
        <section className="margin-t padding-y">
          <BrandModule />
        </section>
        <section className="mb-10 margin-t">
          <Contact />
        </section>
      </div>
    </>
  );
}
