// pages/dashboard.tsx
"use client";

import React from "react";

const Dashboard: React.FC = () => {
  return (
    // Base container for the dashboard with background and text colors
    <div className="min-h-screen bg-background text-foreground">
      {/* Dashboard Container */}
      <div className="container mx-auto px-4 py-8">
        {/* ========================= */}
        {/* Dashboard Header Section */}
        {/* ========================= */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-foregroundLight mt-2">
            Welcome back! Here&apos;s an overview of your recent activity.
          </p>
        </header>

        {/* ========================= */}
        {/* Dashboard Metrics Cards */}
        {/* ========================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Active Jobs Card */}
          <div className="bg-backgroundLight p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Active Jobs</h2>
            <p className="text-4xl font-bold">12</p>
          </div>
          {/* Upcoming Appointments Card */}
          <div className="bg-backgroundLight p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">
              Upcoming Appointments
            </h2>
            <p className="text-4xl font-bold">5</p>
          </div>
          {/* Invoices Sent Card */}
          <div className="bg-backgroundLight p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Invoices Sent</h2>
            <p className="text-4xl font-bold">8</p>
          </div>
        </section>

        {/* ========================= */}
        {/* Recent Activity Section */}
        {/* ========================= */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="bg-backgroundLight p-6 rounded shadow">
            <ul className="space-y-4">
              <li className="border-b border-foregroundLight pb-2">
                Job #345 completed on 2023-02-01
              </li>
              <li className="border-b border-foregroundLight pb-2">
                Invoice #123 sent on 2023-02-02
              </li>
              <li className="border-b border-foregroundLight pb-2">
                New appointment scheduled on 2023-02-03
              </li>
              <li className="border-b border-foregroundLight pb-2">
                Job #346 started on 2023-02-04
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
