import React from "react";
import PortfolioPage from "./portfolio";
export const metadata = {
  title: "Our diverse portfolio",
  description:
    "Explore Our Diverse Portfolio: A Showcase of Creativity, Innovation, and Success Stories. Phone: +977 9802366500, Email: pranisha@twelveletter.co, Location: Kupondole, Lalitpur, Nepal ",
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
    canonical: "/portfolio",
  },
};

export default function page() {
  return (
    <>
      <PortfolioPage />
    </>
  );
}
