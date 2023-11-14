"use client";

import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
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
        <SimpleMDE
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
