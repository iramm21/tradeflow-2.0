// business/[businessId]/job/[jobId]/task/[taskId]/page.tsx
"use client";

import { useParams } from "next/navigation";

export default function TaskDetailPage() {
  const { businessId, jobId, taskId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Task Detail</h1>
      <p>
        Details for Task ID: {taskId} for Job ID: {jobId} in Business ID:{" "}
        {businessId}
      </p>
    </div>
  );
}
