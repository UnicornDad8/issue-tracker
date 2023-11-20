import React from "react";
import { MdDelete } from "react-icons/md";
import styles from "./style.module.css";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <button
      className={`${styles["btn"]} ${styles["btnRed"]} flex items-center flex-1 w-full`}
    >
      <MdDelete className="mr-2" />
      Delete
    </button>
  );
};

export default DeleteIssueButton;
