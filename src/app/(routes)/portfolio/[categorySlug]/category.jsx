"use client";
import { useParams } from "next/navigation";
import PortfolioPage from "../portfolio";

const CategoryPortfolioPage = () => {
  const { categorySlug } = useParams();

  return <PortfolioPage selectedCategory={categorySlug} />;
};

export default CategoryPortfolioPage;
