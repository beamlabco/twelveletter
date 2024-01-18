import Link from "next/link";

import "./category.css";

const CategoryMenu = ({ categories, selectedCategory }) => {
  return (
    <ul className="flex flex-wrap gap-4">
      <li>
        <Link
          className={`text-sm whitespace-nowrap px-4 flex transition-all duration-200 items-center hover:bg-[#FFD3D0] leading-none font-semibold tracking-wider py-[0.6rem] rounded focus:outline-none ${
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
            className={`text-sm whitespace-nowrap font-semibold transition-all duration-200 hover:bg-[#FFD3D0] tracking-wider px-4 py-[0.6rem] leading-none flex items-center rounded focus:outline-none ${
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
  );
};

export default CategoryMenu;
