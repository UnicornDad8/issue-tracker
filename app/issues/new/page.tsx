"use client";

import React from "react";
import styles from "./style.module.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <div className="leading-normal">
        <input
          type="text"
          className="border rounded-sm w-full px-4 py-3"
          placeholder="Title"
        />
      </div>
      <div className="leading-normal">
        <textarea
          className="border rounded-sm w-full px-4 py-3"
          placeholder="Description"
        />
      </div>
      <button className={`${styles["btn"]} ${styles["btnBlue"]}`}>
        Submit New Issue
      </button>
    </div>
  );
};

export default NewIssuePage;
