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
        />
        <p className="mt-5 text-2xl font-manrope font-medium tracking-wide max-w-[1100px] leading-relaxed text-black-shade-100 md:mt-7 ">
          &quot;Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text
          ever&quot;
        </p>
        <p className="mt-5 text-xl font-medium font-manrope text-black-shade-200">
          Shaya Bajracharya | NY-City Florence
        </p>
      </div>
    </div>
  );
}
