"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./category.css";

const CategoryMenu = ({ categories, selectedCategory }) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleLeftArrowClick = () => {
    const coverCategory = () => {
      // Implement the logic for covering the entire category
      // For example, you might want to set some state or perform other actions
      console.log("Covering the entire category");
    };
    if (!isAnimating && currentIndex > 0) {
      setIsAnimating(true);
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Adjust the timeout value as needed
    } else {
      // If already at the beginning, cover the entire category
      coverCategory();
    }
  };

  const handleRightArrowClick = () => {
    const coverCategory = () => {
      // Implement the logic for covering the entire category
      // For example, you might want to set some state or perform other actions
      console.log("Covering the entire category");
    };
    if (!isAnimating && currentIndex < categories.length - 1) {
      setIsAnimating(true);
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Adjust the timeout value as needed
    } else {
      // If already at the end, cover the entire category
      coverCategory();
    }
  };
  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const scrollAmount = index * containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;

      if (container) {
        const scrollPosition = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const maxScroll = container.scrollWidth - containerWidth;

        // Update currentIndex based on scroll position
        setCurrentIndex(Math.floor(scrollPosition / containerWidth));

        // Handle visibility of arrows
        const leftArrow = document.getElementById("left-arrow");
        const rightArrow = document.getElementById("right-arrow");

        if (scrollPosition === 0) {
          leftArrow.style.display = "none";
        } else {
          leftArrow.style.display = "block";
        }

        if (scrollPosition >= maxScroll) {
          rightArrow.style.display = "none";
        } else {
          rightArrow.style.display = "block";
        }
      }
    };

    const updateOverflowStatus = () => {
      const container = containerRef.current;

      if (container) {
        setIsOverflowing(container.scrollWidth > container.offsetWidth);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", updateOverflowStatus);

      // Initial check for overflow
      updateOverflowStatus();
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", updateOverflowStatus);
      }
    };
  }, [containerRef.current]);

  return (
    <div className="relative filter-categories">
      {isOverflowing && (
        <>
          <span id="left-arrow" className="test">
            <a
              onClick={handleLeftArrowClick}
              className={`absolute left-arrow left-[-1px] top-1/2 transform -translate-y-1/2 cursor-pointer ${
                currentIndex === 0 ? "pointer-events-none" : ""
              }`}
            >
              {currentIndex !== categories.length && (
                <FontAwesomeIcon icon={faChevronLeft} />
              )}
            </a>
          </span>
          <span id="right-arrow" className="test">
            <a
              onClick={handleRightArrowClick}
              className={`absolute right-[-1px] top-1/2 arrow-button transform -translate-y-1/2 cursor-pointer ${
                currentIndex === categories.length - 1
                  ? "pointer-events-none"
                  : ""
              }`}
            >
              {currentIndex !== categories.length - 1 && (
                <FontAwesomeIcon icon={faChevronRight} />
              )}
            </a>
          </span>
        </>
      )}
      <ul
        ref={containerRef}
        className="flex mb-4 space-x-4 overflow-x-auto overflow-y-hidden"
      >
        <li>
          <Link
            className={`text-base whitespace-nowrap px-3 flex transition-all duration-200 items-center hover:bg-[#FFD3D0] leading-none font-semibold tracking-wider py-2 rounded focus:outline-none ${
              selectedCategory === null
                ? "bg-primary-accent text-white hover:text-zinc-100 hover:bg-primary-accent"
                : "bg-gray-200 text-black-shade-200"
            }`}
            href="/portfolio"
          >
            Show All
          </Link>
        </li>

        {categories.map((category) => (
          <li key={category}>
            <Link
              as={`/portfolio/${category.toLowerCase().replace(/\s+/g, "-")}`}
              href="/portfolio/[categorySlug]"
              className={`text-base whitespace-nowrap font-semibold transition-all duration-200 hover:bg-[#FFD3D0] tracking-wider px-3 py-2 leading-none flex items-center rounded focus:outline-none ${
                selectedCategory &&
                selectedCategory.toLowerCase() ===
                  category.toLowerCase().replace(/\s+/g, "-")
                  ? "bg-primary-accent text-white hover:text-zinc-100 hover:bg-primary-accent"
                  : "bg-gray-200 text-black-shade-200"
              }`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
