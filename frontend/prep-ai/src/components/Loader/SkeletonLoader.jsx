import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-8 bg-gray-200 rounded w-full mt-4"></div>
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-8 bg-gray-200 rounded w-full mt-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-5 bg-gray-200 rounded w-1/2"></div>
      <div className="h-7 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-9 bg-gray-200 rounded w-full mt-4"></div>
    </div>
  );
};

export default SkeletonLoader;
