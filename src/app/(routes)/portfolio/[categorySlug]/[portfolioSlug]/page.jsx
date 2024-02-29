import React from "react";
import PortfolioContent from "./portfolioContent";
import portfolioData from "@/app/data/portfolioData";

/* Dynamic SEO */
export async function generateMetadata({ params }) {
  // read route params
  const portfolioSlug = params.portfolioSlug;
  const categorySlug = params.categorySlug;

  // Find the portfolio item based on the slug
  if (!portfolioSlug || !categorySlug) {
    return <p>Portfolio not found</p>;
  }

  // Find the category in the portfolioData
  const categoryName = portfolioData.find(
    (item) => item.categorySlug === categorySlug
  );

  if (!categoryName) {
    return <p>Category not found</p>;
  }

  // Find the portfolio item within the category
  const portfolioItem = categoryName.portfolioItems.find(
    (item) => item.slug === portfolioSlug
  );

  if (!portfolioItem) {
    return <p>Portfolio item not found</p>;
  }

  const { title, description, category } = portfolioItem;

  return {
    title: `${title} Portfolio`,
    description: `${description}  Phone: +977 9802366500, Email: pranisha@twelveletter.co, Location: Kupondole, Lalitpur, Nepal`,
    keywords: ["Twelveletter", "Portfolio", category, title],
    alternates: {
      canonical: `/portfolio/showcase/${portfolioSlug}`,
    },
  };
}

export default function page() {
  return (
    <>
      <PortfolioContent />
    </>
  );
}
