import Link from "next/link";

const CategoryMenu = ({ categories, selectedCategory }) => {
  console.log(selectedCategory);
  return (
    <div className="flex mb-4 space-x-4 overflow-x-auto">
      <button
        className={`text-sm uppercase px-2 py-1 rounded focus:outline-none ${
          selectedCategory === null
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        <Link href="/portfolio">Show All</Link>
      </button>
      {categories.map((category) => (
        <Link
          key={category}
          as={`/portfolio/${category.toLowerCase().replace(/\s+/g, "-")}`}
          href="/portfolio/[categorySlug]"
        >
          <span
            className={`text-sm uppercase px-2 py-1 rounded focus:outline-none ${
              selectedCategory &&
              selectedCategory.toLowerCase() ===
                category.toLowerCase().replace(/\s+/g, "-")
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryMenu;
