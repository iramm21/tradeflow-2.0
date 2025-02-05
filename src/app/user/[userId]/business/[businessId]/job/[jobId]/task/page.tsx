// business/[businessId]/job/[jobId]/task/page.tsx
"use client";

import { useParams } from "next/navigation";

export default function TaskListingPage() {
  const { businessId, jobId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Tasks for Job {jobId}</h1>
      <p>
        This page lists all tasks for Job ID: {jobId} in Business ID:{" "}
        {businessId}
      </p>
    </div>
  );
}
