import React from "react";
import { Status } from "@prisma/client";

const statusMap: Record<
  Status,
  { label: string; color: "red" | "blue" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "blue" },
  CLOSED: { label: "Closed", color: "green" },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  if (statusMap[status].label === "Open") {
    return (
      <span
        className="inline-flex items-center rounded-md bg-red-50
      px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
      >
        {statusMap[status].label}
      </span>
    );
  }

  if (statusMap[status].label === "In Progress") {
    return (
      <span
        className="inline-flex items-center rounded-md bg-blue-50
   px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10"
      >
        {statusMap[status].label}
      </span>
    );
  }

  if (statusMap[status].label === "Closed") {
    return (
      <span
        className="inline-flex items-center rounded-md bg-green-50
   px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10"
      >
        {statusMap[status].label}
      </span>
    );
  }

  return null;
};

export default IssueStatusBadge;
