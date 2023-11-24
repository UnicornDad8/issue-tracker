import React from "react";

const LoadingDots = () => {
  return (
    <div className="p-6">
      <div className="flex space-x-2 justify-center items-center bg-white h-auto">
        <span className="sr-only">Loading...</span>
        <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default LoadingDots;
