import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { IssueStatusBadge } from "@/app/components";
import { FaRegEdit } from "react-icons/fa";
import styles from "./style.module.css";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:flex-1 w-full">
        <h2 className="text-3xl font-bold">{issue.title}</h2>
        <div className="flex space-x-3 my-2">
          <IssueStatusBadge status={issue.status} />
          <p className="text-gray-900 text-opacity-20">
            - {issue.createdAt.toDateString()} -
          </p>
        </div>

        <div className={styles["card"]}>
          <div className="p-6 prose lg:prose-xl">
            <ReactMarkdown className={styles["markdown"]}>
              {issue.description}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="md:w-[200px] md:mt-0 mt-4 w-full">
        <Link href={`/issues/${issue.id}/edit`} passHref legacyBehavior>
          <button
            className={`${styles["btn"]} ${styles["btnBlue"]} flex items-center`}
          >
            <FaRegEdit className="mr-2" />
            Edit Issue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IssueDetailPage;
