// components/LoadingSkeleton.jsx
import React from "react";

export const ProductSkeleton = () => {
  return (
    <div className="animate-pulse bg-white rounded-xl shadow-md overflow-hidden">
      <div className="aspect-square bg-gray-200 rounded-xl" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-9 bg-gray-200 rounded" />
      </div>
    </div>
  );
};

// Add more skeleton types if needed
export const CardSkeleton = () => (
  <div className="animate-pulse bg-white rounded-lg shadow-md">
    <div className="h-48 bg-gray-200 rounded-t-lg" />
    <div className="p-4 space-y-2">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  </div>
);
