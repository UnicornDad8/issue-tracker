import React from "react";
import { Skeleton } from "@/app/components";
import styles from "./style.module.css";

const LoadingIssueDetailPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:flex-1">
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
      <div className="md:w-[400px] md:ml-4 md:mt-0 mt-4">
        <Skeleton />
      </div>
    </div>
  );
};

export default LoadingIssueDetailPage;
