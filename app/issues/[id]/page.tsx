import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  //  if (typeof params.id !== "number") notFound();

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <h2 className="text-3xl font-bold">{issue.title}</h2>
      <div className="flex space-x-3 my-2">
        <IssueStatusBadge status={issue.status} />
        <p className="text-gray-900 text-opacity-20">
          - {issue.createdAt.toDateString()} -
        </p>
      </div>
      <div className="relative border flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="p-6">
          <p className="block text-base antialiased font-light leading-relaxed text-inherit">
            {issue.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IssueDetailPage;
