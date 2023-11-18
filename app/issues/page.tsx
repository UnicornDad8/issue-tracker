import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";
import IssueStatusBadge from "../components/IssueStatusBadge";
import styles from "./style.module.css";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <div className="mb-5">
        <button className={`${styles["btn"]} ${styles["btnBlue"]}`}>
          <Link href="/issues/new">New Issue</Link>
        </button>
      </div>

      <div className="relative border overflow-hidden overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-white">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Issue
              </th>
              <th scope="col" className="px-6 py-3 hidden md:table-cell">
                Status
              </th>
              <th scope="col" className="px-6 py-3 hidden md:table-cell">
                Created
              </th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr
                key={issue.id}
                className="odd:bg-white even:bg-gray-50 border-b"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  <Link
                    href={`/issues/${issue.id}`}
                    className="hover:underline hover:text-blue-700 text-blue-500"
                  >
                    {issue.title}
                  </Link>
                  <div className="block md:hidden mt-2">
                    <IssueStatusBadge status={issue?.status} />
                  </div>
                </th>
                <td className="px-6 py-4 hidden md:table-cell">
                  <IssueStatusBadge status={issue?.status} />
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  {issue.createdAt.toDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssuesPage;
