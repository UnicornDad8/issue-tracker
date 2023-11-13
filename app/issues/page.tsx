import React from "react";
import Link from "next/link";
import styles from "./style.module.css";

const IssuesPage = () => {
  return (
    <div>
      <button className={`${styles["btn"]} ${styles["btnBlue"]}`}>
        <Link href="/issues/new">New Issue</Link>
      </button>
    </div>
  );
};

export default IssuesPage;
