import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

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
        <IssueDetails issue={issue} />
      </div>
      <div className="md:w-[400px] md:mt-0 md:ml-4 mt-4 w-full">
        <EditIssueButton issueId={issue.id} />
      </div>
    </div>
  );
};

export default IssueDetailPage;
