import React from "react";
import PageTitle from "../../components/pageTitle/pageTitle";

export default function testimonial() {
  return (
    <div className="bg-[#F5F5F7] padding-y-lg">
      <div className="container-margin">
        <PageTitle
          subHeading="Testimonials"
          heading="Discover the words of our client"
          highlightText="Voices of Satisfaction:"
          textSize="medium"
          tag="h2"
        />
        <p className="mt-5 text-xl font-manrope font-medium tracking-wide max-w-[1200px] leading-relaxed text-black-shade-100 md:mt-7 ">
          &quot;Working with the team was transformative for our business. Their
          communication was exceptional, making us feel connected at every step.
          The designs they delivered not only wowed us but also perfectly
          aligned with our brand, receiving rave reviews from our customers.
          They&quot;ve redefined excellence for us, and we&quot;re excited for
          what&quot;s next in our partnership.&quot;
        </p>
        <p className="mt-5 text-lg font-medium font-manrope text-black-shade-100">
          Shaya Bajracharya
        </p>
      </div>
    </div>
  );
}
