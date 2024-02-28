import React from "react";
import PortfolioPage from "../portfolio";

/* Dynamic SEO */
export async function generateMetadata({ params }) {
  // read route params
  const categorySlug = params.categorySlug;
  const categoryName =
    categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  return {
    title: `${categoryName} Portfolio`,
    description: `Explore Our Diverse ${categoryName} Portfolio: A Showcase of Creativity, Innovation, and Success Stories. Phone: +977 9802366500, Email: pranisha@twelveletter.co, Location: Kupondole, Lalitpur, Nepal`,
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
    ],
    alternates: {
      canonical: `/portfolio/${categorySlug}`,
    },
  };
}

export default function page({ params }) {
  const categorySlug = params.categorySlug;
  return <PortfolioPage selectedCategory={categorySlug} />;
}
