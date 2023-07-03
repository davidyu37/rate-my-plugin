import "./globals.css";
import Image from "next/image";

import { generateContrastingColors } from "../utils/colors";
import Filters from "./_components/filter";
import PluginList from "./_components/plugin-list";
import { getUrl } from "../utils/url";

async function getCategories() {
  const res = await fetch(`${getUrl()}/api/category`);
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getPlugins() {
  const res = await fetch(`${getUrl()}/api/plugin`);
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const [plugins, categories] = await Promise.all([
    getPlugins(),
    getCategories(),
  ]);
  if (plugins && categories) {
    const colors = generateContrastingColors(categories.length);
    const categoryColorMap = {};

    const newCategories = categories.map((category, index) => {
      const categoryName = category["category-name"].toUpperCase();
      categoryColorMap[categoryName] = colors[index];
      return {
        ...category,
        color: colors[index],
      };
    });

    const newPlugins = plugins.map((plugin, index) => {
      const categoryName = plugin.metadata.category.toUpperCase();
      return {
        ...plugin,
        color: categoryColorMap[categoryName],
      };
    });

    return (
      <div className="max-w-screen-md md:mx-auto md:pt-10">
        <div className="navbar bg-white shadow-md px-2 md:mb-3 md:rounded-lg dark:bg-slate-800">
          <div className="flex flex-col justify-start select-none rounded-lg px-4 py-2">
            <span className="text-2xl font-bold">Rate my Plugins</span>
            <span className="text-xs">Until OpenAI Plugin Store is ready</span>
          </div>
        </div>
        <Filters categories={newCategories} />
        <PluginList plugins={newPlugins} />
      </div>
    );
  }

  return (
    <div className="max-w-screen-md md:mx-auto md:pt-10">
      <div className="navbar bg-white shadow-md px-2 md:mb-3 md:rounded-lg dark:bg-slate-800">
        <div className="flex flex-col justify-start select-none rounded-lg px-4 py-2">
          <span className="text-2xl font-bold">Rate my Plugins</span>
          <span className="text-xs">Until OpenAI Plugin Store is ready</span>
        </div>
      </div>
      Loading...
    </div>
  );
}
