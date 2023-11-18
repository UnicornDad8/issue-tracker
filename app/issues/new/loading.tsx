import React from "react";
import { Skeleton } from "@/app/components";

const LoadingNewIssuePage = () => {
  return (
    <div className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
    </div>
  );
};

export default LoadingNewIssuePage;
