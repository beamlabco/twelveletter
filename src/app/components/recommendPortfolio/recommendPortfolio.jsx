import React from "react";
import Link from "next/link";
import { portfolioData } from "@/app/data/portfolioData";
import PageTitle from "../../components/pageTitle/pageTitle";

export default function RecommendPortfolio({
  limit = 4,
  random = false,
  category = null,
}) {
  // Filter or randomize the data based on options
  let filteredData = portfolioData;

  if (category) {
    filteredData = filteredData.filter((item) => item.category === category);
  }

  if (random) {
    // Shuffle the array to get random items
    filteredData = [...filteredData].sort(() => Math.random() - 0.5);
  }

  // Limit the data to the specified number
  filteredData = filteredData.slice(0, limit);

  return (
    <div className="pb-6 lg:pb-20 container-margin">
      <PageTitle
        subHeading="Recommendation"
        heading="Diverse Portfolios Await Your Discovery"
        highlightText="Explore More:"
        highlightGradient={true}
        textSize="medium"
      />
      <ul className="grid grid-cols-1 gap-6 mt-7 md:mt-10 lg:mt-12 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {filteredData.map(({ id, slug, image, title }) => (
          <li
            key={id}
            className="relative w-full h-full min-w-0 col-span-1 overflow-hidden rounded-md group"
          >
            <Link
              as={`/portfolio/showcase/${slug}`}
              href="/portfolio/showcase/[portfolioSlug]"
              className="relative w-full cursor-pointer card-container"
            >
              <img
                className="top-0 left-0 object-cover w-full transition-opacity"
                src={image}
                alt="Card Image"
              />
              <div className="absolute bottom-0 flex w-full group">
                <div className="relative w-full transition-transform ease-in transform translate-y-2 opacity-0 duration-400 bg-gradient-to-t from-black-shade-300 to-transparent group-hover:translate-y-0 group-hover:opacity-100">
                  <h4 className="bottom-0 px-4 pt-4 pb-3 font-medium tracking-wider text-white duration-500 translate-y-4 opacity-0 text-over group-hover:translate-y-0 group-hover:opacity-100">
                    {title}
                  </h4>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/portfolio"
        className="float-right mt-6 text-base font-semibold tracking-wider lg:text-lg text-primary-accent lg:mt-12"
      >
        Check All
      </Link>
    </div>
  );
}
