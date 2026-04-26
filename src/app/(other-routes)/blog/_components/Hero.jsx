"use client";

const categories = [
  "All blogs",
  "Business",
  "Insights",
  "Design",
  "Creativity",
];

export default function HeroSection({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-col mt-10 md:mt-20 pt-15 md:pt-30 pb-10 w-[95%] md:px-10 mx-auto items-start justify-end gap-10">
      <h1 className="font-bold leading-none tracking-tighter text-5xl md:text-[230px]">
        Blog
      </h1>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 py-2 text-sm font-medium border transition-colors duration-200 ${
              activeCategory === cat
                ? "bg-black text-white border-black"
                : "bg-white text-black border-black hover:bg-black hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
