"use client";
import Contact from "./(routes)/contact-us/contact";
import BrandModule from "./components/brandModule/brandModule";
import ServiceModule from "./components/homeModules/serviceModule";

export default function Home() {
  return (
    <>
      <div className="test">
        <section className="container-margin padding-y">
          <ServiceModule />
        </section>
        <section className="margin-t paddint-y">
          <BrandModule />
        </section>
        <section className="margin-t">
          <Contact />
        </section>
      </div>
    </>
  );
}
