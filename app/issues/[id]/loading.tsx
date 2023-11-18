import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailPage = () => {
  return (
    <div className="max-w-xl">
      <Skeleton width="14rem" />

      <div className="flex space-x-3 my-2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </div>

      <div className="relative border flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="p-6">
          <Skeleton count={3} />
        </div>
      </div>
    </div>
  );
};

export default LoadingIssueDetailPage;
