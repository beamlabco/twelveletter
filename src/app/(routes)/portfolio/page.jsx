import React from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import { portfolioData } from "@/app/data/portfolioData";

export default function Page() {
  return (
    <div className="min-h-screen top-section-p container-margin">
      <section>
        <PageTitle
          textSize="large"
          heading="Explore Our Portfolio: A Showcase of Creativity, Innovation, and Success Stories"
          subHeading="Portfolio Showcase"
        />
      </section>
      <section className="py-10">Sub Menu</section>
      <section>
        <div>
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {portfolioData?.map((portfolio, index) => (
              <li className="relative w-full h-full min-w-0 col-span-1 overflow-hidden rounded-md group">
                <a className="relative w-full cursor-pointer card-container">
                  <img
                    className="top-0 left-0 object-cover w-full h-full transition-opacity"
                    src={portfolio.image}
                    alt="Card Image"
                  />
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full px-3 pb-2 transition-opacity ease-in opacity-0 pt-7 duration-400 bg-gradient-to-t from-black via-black to-transparent group-hover:opacity-100">
                      <h4 className="font-medium tracking-wider text-white">
                        {portfolio.title}
                      </h4>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
