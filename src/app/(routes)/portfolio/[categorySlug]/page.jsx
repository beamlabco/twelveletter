import React from "react";
import PortfolioPage from "../portfolio";
import portfolioData from "@/app/data/portfolioData";

export function generateStaticParams() {
  const categorySlugs = portfolioData.map((category) => ({
    categorySlug: category.categorySlug,
  }));

  return categorySlugs;
}

/* Dynamic SEO */
export async function generateMetadata({ params }) {
  const { categorySlug } = params;
  const convertSlugToTitle = (slug) => {
    return slug
      .split("-") // Split the slug by hyphen
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Join the words with a space
  };

  const category = categorySlug;
  const categoryName = convertSlugToTitle(categorySlug);

  return {
    title: `${categoryName} Portfolio`,
    description: `Explore Our Diverse ${categoryName} Portfolio: A Showcase of Creativity, Innovation, and Success Stories. Phone: +977 9802366500, Email: info@twelveletter.co, Location: Kupondole, Lalitpur, Nepal`,
    keywords: [
      "Twelveletter",
      "portfolio",
      "Animated Video Creatives",
      "Banners and newsletters",
      "Branding",
      "Logo Design",
      "Digital post creatives",
      "Offline print creatives",
      "Packaging",
      "3D design",
      "Food Catalogue",
      "Offline Print Creatives",
    ],
    alternates: {
      canonical: `/portfolio/${category}`,
    },
  };
}

export default function page({ params }) {
  const category = params.categorySlug;
  return <PortfolioPage selectedCategory={category} />;
}
