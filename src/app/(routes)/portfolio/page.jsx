"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import PageTitle from "../../components/pageTitle/pageTitle";
import CategoryMenu from "./(components)/categoryMenu";
import { portfolioData } from "@/app/data/portfolioData";

export default function PortfolioPage(props) {
  const [selectedCategory, setSelectedCategory] = useState(
    props.selectedCategory !== undefined ? props.selectedCategory : null
  );
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async data fetching or filtering
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching

      // Simulate API call or data filtering
      const newData = selectedCategory
        ? portfolioData.filter(
            (item) =>
              item.category.toLowerCase().replace(/\s+/g, "-") ===
              selectedCategory.toLowerCase().replace(/\s+/g, "-")
          )
        : portfolioData;

      // Introduce a delay (simulating async operation)
      await new Promise((resolve) => setTimeout(resolve, 300));

      setFilteredData(newData);
      setLoading(false); // Set loading to false after fetching
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen top-section-p container-margin">
      <section>
        <PageTitle
          textSize="large"
          heading="Explore Our Portfolio: A Showcase of Creativity, Innovation, and Success Stories"
          subHeading="Portfolio Showcase"
        />
      </section>
      <section className="py-10">
        <CategoryMenu
          categories={[
            ...Array.from(new Set(portfolioData.map((item) => item.category))),
          ]}
          selectedCategory={props.selectedCategory || selectedCategory}
          handleCategoryClick={handleCategoryClick}
        />
      </section>
      <section>
        <div>
          {loading ? (
            // Show loader while loading
            <p>Loading...</p>
          ) : (
            <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredData.map(({ id, slug, image, title }) => (
                <li
                  key={id}
                  className="relative w-full h-full min-w-0 col-span-1 overflow-hidden rounded-md group"
                >
                  <Link
                    as={`/portfolio/showcase/${slug}}`}
                    href="/portfolio/showcase/[portfolioSlug]"
                    className="relative w-full cursor-pointer card-container"
                  >
                    <img
                      className="top-0 left-0 object-cover w-full h-full transition-opacity"
                      src={image}
                      alt="Card Image"
                    />
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-full px-3 pt-3 pb-2 transition-opacity ease-in opacity-0 duration-400 bg-gradient-to-t from-black via-black to-transparent group-hover:opacity-90">
                        <h4 className="font-medium tracking-wider text-white text-over">
                          {title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
