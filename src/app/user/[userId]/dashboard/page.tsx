"use client";

import DashboardSummaryCard from "@/components/auth/cards/DashboardSummaryCard";
import RecentProjectsCard from "@/components/auth/cards/RecentProjectsCard";
import QuickActionsCard from "@/components/auth/cards/QuickActionsCard";

// Dummy data for demonstration
const dummyProjects = [
  { id: "1", name: "Project Alpha", status: "in progress" },
  { id: "2", name: "Project Beta", status: "completed" },
  { id: "3", name: "Project Gamma", status: "pending" },
];

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <DashboardSummaryCard title="Total Projects" value="12" />
        <DashboardSummaryCard title="Active Jobs" value="7" />
        <DashboardSummaryCard title="Employees" value="5" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RecentProjectsCard projects={dummyProjects} />
        <QuickActionsCard />
      </div>
    </div>
  );
}
