import React from "react";
import PageTitle from "../../components/pageTitle/pageTitle";

export default function testimonial() {
  return (
    <div className="container-margin">
      <PageTitle
        subHeading="Testimonials"
        heading="Discover the words of our client"
        highlightText="Voices of Satisfaction:"
        highlightGradient={true}
        textSize="medium"
      />
      <p className="mt-6 paragraph text-black-shade-200 md:mt-7 lg:mt-8">
        “ Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. ”
      </p>
      <p className="mt-4 text-black-shade-100">
        Shaya Bajracharya | NY-City Florence
      </p>
    </div>
  );
}
