import React from "react";
import Skeleton from "react-loading-skeleton";
import IssueActions from "./IssueActions";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5];

  return (
    <div>
      <IssueActions />
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
              <tr key={issue} className="odd:bg-white even:bg-gray-50 border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  <Skeleton />
                  <div className="block md:hidden mt-2">
                    <Skeleton />
                  </div>
                </th>
                <td className="px-6 py-4 hidden md:table-cell">
                  <Skeleton />
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <Skeleton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadingIssuesPage;
