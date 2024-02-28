import React from "react";
import PortfolioContent from "./portfolioContent";
import { portfolioData } from "@/app/data/portfolioData";

/* Dynamic SEO */
export async function generateMetadata({ params }) {
  // read route params
  const portfolioSlug = params.portfolioSlug;
  // Find the portfolio item based on the slug
  const portfolioItem = portfolioData.find(
    (item) => item.slug === portfolioSlug
  );

  if (!portfolioItem) {
    return <p>Portfolio not found</p>;
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
