import React from "react";
import Link from "@/node_modules/next/link";
import IssueStatusFilter from "./IssueStatusFilter";
import styles from "../style.module.css";

const IssueActions = () => {
  return (
    <div className="mb-5 flex justify-between">
      <IssueStatusFilter />
      <button className={`ml-2 ${styles["btn"]} ${styles["btnBlue"]}`}>
        <Link href="/issues/new">New Issue</Link>
      </button>
    </div>
  );
};

export default IssueActions;
