// business/[businessId]/page.tsx
"use client";

import { useParams } from "next/navigation";

export default function BusinessDetailPage() {
  const { businessId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Business Detail</h1>
      <p>Details for Business ID: {businessId}</p>
    </div>
  );
}
