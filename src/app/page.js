"use client";
import Contact from "./(routes)/contact-us/contact";
import BrandModule from "./components/brandModule/brandModule";
import ServiceModule from "./components/homeModules/serviceModule";
import PortfolioSlider from "./components/homeModules/portfolioSlider";
import PageTitle from "./components/pageTitle/pageTitle";

export default function Home() {
  return (
    <>
      <div>
        <section className="container-margin lg:pt-32 lg:pb-16">
          <PageTitle
            highlightTextEnd="Your Success, Our Mission"
            textSize="xl"
            heading="Designing Dreams, Marketing Reality: "
            extraClass="lg:leading-[1.3]"
            maxWidth="max-w-[1200px]"
          />
          <p className="text-lg leading-relaxed md:text-2xl font-normal md:leading-10 tracking-wide max-w-[1200px] mt-7 lg:mt-10 text-black-shade-200">
            Infuse brilliance into your brand journey with our expert design and
            marketing touch. Where creativity meets strategy, success is
            inevitable.
          </p>
        </section>
        <section className="margin-t bg-gradient-to-t from-[#FFE9E8] padding-y-lg lg:pb-20">
          <PortfolioSlider />
        </section>
        <section className="container-margin margin-t padding-y">
          <ServiceModule />
        </section>
        <section className="margin-t padding-y">
          <BrandModule />
        </section>
        <section className="mb-10">
          <Contact />
        </section>
      </div>
    </>
  );
}
