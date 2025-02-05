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
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Sidebar: hidden on small screens, visible on md and larger */}
        <div>
          <DashboardSidebar />
        </div>
        <main className="flex-grow p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
