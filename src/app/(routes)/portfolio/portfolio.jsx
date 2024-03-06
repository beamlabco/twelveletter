"use client";
import { useState, useEffect, useCallback } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import CategoryMenu from "./(components)/categoryMenu";
import portfolioData from "@/app/data/portfolioData"; // Import portfolioData from the correct path
import ContactModule from "@/app/components/contactModules/contactModule";
import Loader from "@/app/components/loader/loader";
import Pagination from "@/app/components/pagination/pagination";
import Link from "next/link";

export default function PortfolioPage(props) {
  const [selectedCategory, setSelectedCategory] = useState(
    props.selectedCategory !== undefined ? props.selectedCategory : null
  );
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async data fetching or filtering
    const fetchData = async () => {
      setLoading(true);

      // Simulate API call or data filtering
      const newData = selectedCategory
        ? portfolioData.filter(
            (category) => category.categorySlug === selectedCategory
          )
        : portfolioData;

      setFilteredData(newData);
      setLoading(false);
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const [pagination, setPagination] = useState({
    start: 0,
    end: 12,
  });

  const onPaginationChange = useCallback(
    (start, end) => {
      setPagination({ start: start, end: end });
    },
    [setPagination]
  );

  return (
    <>
      <div className="min-h-screen top-section-p container-margin">
        <section>
          <PageTitle
            textSize="large"
            heading="A Showcase of Creativity, Innovation, and Success Stories"
            subHeading="Portfolio Showcase"
            highlightText="Explore Our Portfolio:"
            highlightGradient="true"
          />
        </section>
        <section className="mb-8 my-7 md:my-12 lg:mt-12 lg:mb-10">
          <CategoryMenu
            categorySlug={[
              ...Array.from(
                new Set(portfolioData.map((item) => item.categorySlug))
              ),
            ]}
            selectedCategory={props.selectedCategory || selectedCategory}
            handleCategoryClick={handleCategoryClick}
          />
        </section>
        <section>
          <div>
            {loading ? (
              <Loader />
            ) : (
              <ul className="grid grid-cols-1 gap-6 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
                {filteredData
                  .slice(pagination.start, pagination.end)
                  .map((category) =>
                    category.portfolioItems.map(
                      ({ id, slug, image, title }) => (
                        <li
                          key={id}
                          className="relative w-full h-full min-w-0 col-span-1 overflow-hidden rounded-md group"
                        >
                          <Link
                            title={title}
                            href="/portfolio/[categorySlug]/[portfolioSlug]"
                            as={`/portfolio/${category.categorySlug}/${slug}`}
                            className="relative w-full cursor-pointer card-container"
                          >
                            <img
                              title={title}
                              loading="lazy"
                              className="top-0 left-0 object-fill w-full overflow-hidden transition-opacity rounded-md "
                              src={image}
                              alt={title}
                            />
                            <div className="absolute bottom-0 hidden w-full h-1/3 sm:flex group">
                              <div
                                style={{
                                  transition: "all 100ms",
                                }}
                                className="relative w-full h-full transition-transform ease-in transform translate-y-2 opacity-0 ease duration-400 bg-gradient-to-t from-[#111111bb] to-transparent group-hover:translate-y-0 group-hover:opacity-100"
                              >
                                <h2 className="absolute bottom-[5px] px-5 pt-4 pb-4 font-medium tracking-wider text-white transition-all duration-300 translate-y-4 opacity-0 text-over group-hover:translate-y-0 group-hover:opacity-100">
                                  {title}
                                </h2>
                              </div>
                            </div>
                            <div className="mt-1 sm:hidden">
                              <h2 className="text-lg font-semibold tracking-wide transition-colors duration-200 text-black-shade-200 group-hover:text-primary-accent">
                                {title}
                              </h2>
                            </div>
                          </Link>
                        </li>
                      )
                    )
                  )}
              </ul>
            )}
          </div>
        </section>
        <section className="margin-t">
          <Pagination
            showPerPage="12"
            onPaginationChange={onPaginationChange}
            total={filteredData?.reduce(
              (acc, category) => acc + category.portfolioItems.length,
              0
            )}
          />
        </section>
      </div>
      <ContactModule />
    </>
  );
}
