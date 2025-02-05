// business/[businessId]/job/page.tsx
"use client";

import { useParams } from "next/navigation";

export default function JobListingPage() {
  const { businessId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Jobs for Business {businessId}</h1>
      <p>This page lists all jobs for the selected business.</p>
    </div>
  );
}
