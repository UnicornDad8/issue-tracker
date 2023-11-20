import React from "react";
import ReactMarkdown from "react-markdown";
import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import styles from "./style.module.css";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <h2 className="text-3xl font-bold">{issue?.title}</h2>
      <div className="flex space-x-3 my-2">
        <IssueStatusBadge status={issue?.status} />
        <p className="text-gray-900 text-opacity-20">
          - {issue.createdAt.toDateString()} -
        </p>
      </div>

      <div className={styles["card"]}>
        <div className="p-6 prose lg:prose-xl">
          <ReactMarkdown className={styles["markdown"]}>
            {issue?.description}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default IssueDetails;
