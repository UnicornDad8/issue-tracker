import React from "react";
import { Skeleton } from "@/app/components";
import styles from "./style.module.css";

const LoadingIssueDetailPage = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-2">
      <div className="lg:flex-1 w-full mb-4">
        <Skeleton width="14rem" />

        <div className="flex space-x-3 my-2">
          <Skeleton width="5rem" />
          <Skeleton width="8rem" />
        </div>

        <div className={styles["card"]}>
          <div className="p-6 w-full">
            <Skeleton count={3} />
          </div>
        </div>
      </div>

      <div className="lg:w-[300px] w-full">
        <Skeleton height="3rem" />
        <div className="lg:w-[300px] flex items-stretch md:flex-col sm:flex-row flex-col w-full">
          <div className="mb-2 md:flex-none flex-1">
            <Skeleton height="3rem" />
          </div>
          <div className="md:flex-none sm:ml-2 md:ml-0 flex-1">
            <Skeleton height="3rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIssueDetailPage;
