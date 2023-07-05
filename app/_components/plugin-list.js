"use client";
import useSWR from "swr";
import PluginCard from "./plugin-card";
import { getUrl } from "../../utils/url";
import SkeletonPluginCard from "./skeleton-plugin-card";

// A component for the list of plugins
async function getPlugins() {
  const res = await fetch(`${getUrl()}/api/plugin`);
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

const SkeletonPluginCardList = () => {
  return (
    <>
      {Array(10)
        .fill()
        .map((_, i) => (
          <SkeletonPluginCard key={i} />
        ))}
    </>
  );
};

const PluginList = ({ categoryColorMap }) => {
  const { data: plugins, error } = useSWR("/api/plugin", getPlugins);

  if (error) {
    return <div>Failed to load plugins</div>;
  }

  let newPlugins = [];


  if (plugins && plugins.length > 0) {
    newPlugins = plugins.map((plugin, index) => {
      const categoryName = plugin.metadata.category.toUpperCase();
      return {
        ...plugin,
        color: categoryColorMap[categoryName] || "gray",
      };
    });
  }

  return (
    <div className="flex flex-wrap bg-white dark:bg-slate-800">
      {!plugins && <SkeletonPluginCardList />}
      {newPlugins.map((plugin, index) => (
        <PluginCard
          key={index}
          id={plugin.id}
          logoUrl={plugin.metadata.logo_url}
          url={plugin.metadata.domain}
          name={plugin.metadata.name}
          description={plugin.metadata.description}
          category={plugin.metadata.category}
          color={plugin.color}
          rating={plugin.rating}
        />
      ))}
    </div>
  );
};

export default PluginList;
