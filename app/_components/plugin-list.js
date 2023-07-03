import PluginCard from "./plugin-card";
// A component for the list of plugins
const PluginList = ({ plugins }) => (
  <div className="flex flex-wrap bg-white dark:bg-slate-800">
    {plugins.map((plugin, index) => (
      <PluginCard
        key={index}
        id={plugin.id}
        logoUrl={plugin.metadata.logo_url}
        url={plugin.metadata.domain}
        name={plugin.metadata.name}
        description={plugin.metadata.description}
        category={plugin.metadata.category}
        color={plugin.color}
      />
    ))}
  </div>
);

export default PluginList;
