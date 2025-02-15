"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function QuickActionsCard() {
  const { userId } = useParams(); // Extract the dynamic userId from the URL

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 text-center">
        Quick Actions
      </h3>
      <div className="flex flex-col space-y-3">
        <Link
          href={`/user/${userId}/dashboard/projects/create`}
          className="inline-block px-3 py-2 md:px-4 md:py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-center text-sm md:text-base"
        >
          Create New Project
        </Link>
        <Link
          href={`/user/${userId}/account`}
          className="inline-block px-3 py-2 md:px-4 md:py-2 bg-secondary text-white rounded hover:bg-secondary/90 transition-colors text-center text-sm md:text-base"
        >
          Manage Account
        </Link>
        <Link
          href={`/user/${userId}/dashboard/settings`}
          className="inline-block px-3 py-2 md:px-4 md:py-2 bg-accent text-white rounded hover:bg-accent/90 transition-colors text-center text-sm md:text-base"
        >
          Dashboard Settings
        </Link>
      </div>
    </div>
  );
}
