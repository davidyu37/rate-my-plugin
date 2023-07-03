'use client';

import { useCategory } from '../_context/category-context';

const CategoryButton = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useCategory();
  return (
    <button
      style={{ backgroundColor: category.color }}
      key={category.id}
      className="mx-2 text-white font-semibold py-2 px-4 rounded"
    >
      {category["category-name"]}
    </button>
  );
};

export default CategoryButton;
