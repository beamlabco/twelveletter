"use client";
import Contact from "./(routes)/contact-us/contact";
import BrandModule from "./components/brandModule/brandModule";
import ServiceModule from "./components/homeModules/serviceModule";
import PortfolioSlider from "./components/homeModules/portfolioSlider";
import Hero from "./components/homeModules/hero";
export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="absolute z-0 w-full min-h-screen overflow-hidden blur-[80px]">
          <div className="absolute bg-[#0084ff5e] h-[300px] w-[300px] left-[-170px] top-1/2 lg:h-[500px] lg:w-[500px] opacity-40 lg:left-[-300px] lg:top-1/2 "></div>
          <div className="absolute h-[500px] w-[500px] bg-[#fa78ff] right-[-350px] top-[-300px] lg:h-[600px] lg:w-[600px] lg:right-[-400px] opacity-60 lg:top-[-500px]"></div>
        </div>
        <section className="relative z-10 flex min-h-[40vh] pt-10 flex-col justify-center lg:min-h-[76vh] container-margin-compact">
          <Hero />
        </section>
        <section className="margin-t bg-gradient-to-t from-[#FFE9E8] padding-y-lg lg:pb-32">
          <PortfolioSlider />
        </section>
        <section className="container-margin lg:max-w-[1250px] margin-t padding-y">
          <ServiceModule />
        </section>
        <section className="margin-t padding-y">
          <BrandModule />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
}
