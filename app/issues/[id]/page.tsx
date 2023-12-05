import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import DeleteIssueButton from "./DeleteIssueButton";
import IssueDetails from "./IssueDetails";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AssigneeSelect from "./AssigneeSelect";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div className="flex flex-col md:flex-row md:space-x-2">
      <div className="lg:flex-1 w-full mb-4">
        <IssueDetails issue={issue} />
      </div>
      {session && (
        <div className="lg:w-[300px] w-full">
          <AssigneeSelect issue={issue} />
          <div className="lg:w-[300px] flex items-stretch md:flex-col sm:flex-row flex-col w-full">
            <div className="mb-2 md:flex-none flex-1">
              <EditIssueButton issueId={issue.id} />
            </div>
            <div className="md:flex-none sm:ml-2 md:ml-0 flex-1">
              <DeleteIssueButton issueId={issue.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssueDetailPage;
