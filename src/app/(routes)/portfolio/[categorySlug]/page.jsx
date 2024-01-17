"use client";
import { useParams } from "next/navigation";
import PortfolioPage from "../page";

const CategoryPortfolioPage = () => {
  const { categorySlug } = useParams();

  return <PortfolioPage selectedCategory={categorySlug} />;
};

export default CategoryPortfolioPage;
