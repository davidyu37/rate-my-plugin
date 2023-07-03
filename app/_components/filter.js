import { CategoryProvider } from "../_context/category-context";
import CategoryButton from "./category-button";
// A component for the filter section
const Filters = async ({ categories }) => {
  return (
    <CategoryProvider>
      <div className="bg-white dark:bg-slate-800 navbar bg-inherit p-2 border-b-2 border-b-base-200 rounded-b-none md:rounded-lg md:rounded-b-none overflow-x-auto whitespace-nowrap">
        {categories.map((category, index) => {
          return (
            <CategoryButton key={index} category={category} />
          );
        })}
      </div>
    </CategoryProvider>
  );
};

export default Filters;
