import React from "react";
import { Skeleton } from "@/app/components";

const LoadingIssueDetailPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:flex-1">
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
      <div className="md:w-[200px] md:mt-0 mt-4">
        <Skeleton />
      </div>
    </div>
  );
};

export default LoadingIssueDetailPage;
