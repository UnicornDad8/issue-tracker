import React from "react";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import styles from "./style.module.css";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Link href={`/issues/${issueId}/edit`} passHref legacyBehavior>
      <button
        className={`${styles["btn"]} ${styles["btnBlue"]} flex items-center flex-1 w-full`}
      >
        <FaRegEdit className="mr-2" />
        Edit Issue
      </button>
    </Link>
  );
};

export default EditIssueButton;
