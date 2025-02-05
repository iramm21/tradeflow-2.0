// business/[businessId]/job/[jobId]/page.tsx
"use client";

import { useParams } from "next/navigation";

export default function JobDetailPage() {
  const { businessId, jobId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Job Detail</h1>
      <p>
        Details for Job ID: {jobId} in Business ID: {businessId}
      </p>
    </div>
  );
}
