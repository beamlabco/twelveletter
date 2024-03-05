import Link from "next/link";
import portfolioData from "@/app/data/portfolioData";

const CategoryMenu = ({ selectedCategory }) => {
  return (
    <ul className="flex flex-wrap gap-4">
      <li>
        <Link
          title="Show All Portfolio"
          href="/portfolio"
          className={`text-sm whitespace-nowrap px-4 flex transition-all duration-200 items-center hover:bg-[#FFD3D0] leading-none font-semibold tracking-wider py-[0.6rem] rounded focus:outline-none ${
            selectedCategory === null
              ? "bg-primary-accent text-white hover:text-zinc-100 hover:bg-primary-accent"
              : "bg-gray-200 text-black-shade-200"
          }`}
        >
          Show All
        </Link>
      </li>

      {portfolioData.map((category) => (
        <li key={category.category}>
          <Link
            title={category.category}
            href={`/portfolio/${category.categorySlug}`}
            className={`text-sm whitespace-nowrap font-semibold transition-all duration-200 hover:bg-[#FFD3D0] tracking-wider px-4 py-[0.6rem] leading-none flex items-center rounded focus:outline-none ${
              selectedCategory &&
              selectedCategory.toLowerCase() === category.categorySlug
                ? "bg-primary-accent text-white hover:text-zinc-100 hover:bg-primary-accent"
                : "bg-gray-200 text-black-shade-200"
            }`}
          >
            {category.category}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryMenu;
