"use client";

import DashboardHeader from "@/components/auth/layout/DashboardHeader";
import DashboardSidebar from "@/components/auth/layout/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <div className="flex flex-grow">
        <DashboardSidebar />
        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
}
