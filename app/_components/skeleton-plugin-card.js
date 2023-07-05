const SkeletonPluginCard = () => {
    return (
      <div className="w-full overflow-hidden border-b-2 p-4 animate-pulse">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-400 rounded-full w-16 h-16"></div>
            <div>
              <div className="h-4 bg-gray-400 rounded w-3/4"></div>
              <div className="h-3 bg-gray-400 rounded w-1/4 mt-2"></div>
            </div>
          </div>
          <div className="bg-gray-400 h-8 w-8 rounded-full"></div>
        </div>
        <div className="h-4 bg-gray-400 rounded w-1/2 mt-4"></div>
        <div className="h-4 bg-gray-400 rounded w-full mt-2"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2 mt-2"></div>
      </div>
    );
  };
  
  export default SkeletonPluginCard;
  