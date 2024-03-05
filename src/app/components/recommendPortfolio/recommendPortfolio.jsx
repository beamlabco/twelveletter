import React from "react";
import Link from "next/link";
import portfolioData from "@/app/data/portfolioData";
import PageTitle from "../../components/pageTitle/pageTitle";
import "aos/dist/aos.css";

export default function RecommendPortfolio({
  limit = 4,
  random = true,
  category = null,
  currentPortfolioSlug,
}) {
  // Separate logical parts into functions
  const updatedPortfolioData = addCategorySlugsToPortfolioItems(portfolioData);

  let filteredData = filterPortfolioData(
    updatedPortfolioData,
    category,
    currentPortfolioSlug
  );

  let allPortfolioItems = combinePortfolioItems(filteredData, random, limit);

  console.log(allPortfolioItems);

  return (
    <div className="pb-6 lg:pb-20 container-margin">
      <PageTitle
        subHeading="Recommendation"
        heading="Diverse Portfolios Await Your Discovery"
        highlightText="Explore More:"
        highlightGradient={true}
        textSize="medium"
        extraClass="text-3xl"
        tag="h2"
      />
      <ul
        data-aos="fade-left"
        className="grid grid-cols-1 gap-6 mt-8 md:mt-10 lg:mt-8 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
      >
        {allPortfolioItems.map(({ id, slug, image, title, categorySlug }) => (
          <li
            data-aos="fade-in"
            key={id}
            className="relative w-full h-full min-w-0 col-span-1 overflow-hidden rounded-md group"
          >
            <Link
              title={title}
              as={`/portfolio/${categorySlug}/${slug}`}
              href="/portfolio/showcase/[portfolioSlug]"
              className="relative w-full cursor-pointer card-container"
            >
              <img
                title={title}
                className="top-0 left-0 object-cover w-full overflow-hidden transition-opacity rounded-md"
                src={image}
                alt="Card"
              />
              <div className="absolute bottom-0 hidden w-full sm:flex group">
                <div
                  style={{
                    transition: "all 100ms",
                  }}
                  className="relative w-full transition-transform ease-in transform translate-y-2 opacity-0 ease duration-400 bg-gradient-to-t from-black-shade-300 to-transparent group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="bottom-0 px-4 pt-4 pb-3 text-lg font-medium tracking-wider text-white transition-all duration-300 translate-y-4 opacity-0 text-over group-hover:translate-y-0 group-hover:opacity-100">
                    {title}
                  </p>
                </div>
              </div>
              <div className="mt-1 sm:hidden">
                <p className="text-lg font-semibold tracking-wide transition-colors duration-200 text-black-shade-200 group-hover:text-primary-accent">
                  {title}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        title="Check All Portfolio"
        href="/portfolio"
        className="float-right mt-6 text-base font-semibold tracking-wider lg:text-lg text-primary-accent lg:mt-12"
      >
        Check All
      </Link>
    </div>
  );
}

// Function to add category slug to each portfolio item
function addCategorySlugsToPortfolioItems(portfolioData) {
  return portfolioData.map((categoryItem) => {
    const categorySlug = categoryItem.categorySlug;
    const portfolioItemsWithCategorySlug = categoryItem.portfolioItems.map(
      (portfolioItem) => {
        return {
          ...portfolioItem,
          categorySlug: categorySlug,
        };
      }
    );

    return {
      ...categoryItem,
      portfolioItems: portfolioItemsWithCategorySlug,
    };
  });
}

// Function to filter portfolio data based on category and current portfolio slug
function filterPortfolioData(portfolioData, category, currentPortfolioSlug) {
  let filteredData = portfolioData;

  if (category) {
    filteredData = filteredData.filter(
      (categoryItem) => categoryItem.categorySlug === category
    );
  }

  if (currentPortfolioSlug) {
    filteredData = filteredData.map((categoryItem) => ({
      ...categoryItem,
      portfolioItems: categoryItem.portfolioItems.filter(
        (portfolioItem) => portfolioItem.slug !== currentPortfolioSlug
      ),
    }));
  }

  return filteredData;
}

// Function to combine portfolio items from different categories into one array
function combinePortfolioItems(filteredData, random, limit) {
  let allPortfolioItems = filteredData.reduce(
    (accumulator, categoryItem) => [
      ...accumulator,
      ...categoryItem.portfolioItems,
    ],
    []
  );

  if (random) {
    // Shuffle all portfolio items if randomization is enabled
    allPortfolioItems = allPortfolioItems.sort(() => Math.random() - 0.5);
  }

  // Apply the overall limit to the combined portfolio items
  return allPortfolioItems.slice(0, limit);
}
