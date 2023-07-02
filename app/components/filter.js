"use client";
import { createContext, useContext, useState } from 'react'

// A component for the filter section
const Filters = async ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const onCategoryClick = (category) => {
    console.log(category)
    setSelectedCategory(category)
}


  return (
    <div className="bg-white dark:bg-slate-800 navbar bg-inherit p-2 border-b-2 border-b-base-200 rounded-b-none md:rounded-lg md:rounded-b-none overflow-x-auto whitespace-nowrap">
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => onCategoryClick(category)}
            style={{ backgroundColor: category.color }}
            key={category.id}
            className="mx-2 text-white font-semibold py-2 px-4 rounded"
          >
            {category["category-name"]}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
