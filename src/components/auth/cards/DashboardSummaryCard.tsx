"use client";

import React from "react";
import { FiClipboard } from "react-icons/fi";

interface DashboardSummaryCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
}

export default function DashboardSummaryCard({
  title,
  value,
  icon,
}: DashboardSummaryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300">
      <div className="text-primary text-4xl">{icon || <FiClipboard />}</div>
      <div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-2xl text-foregroundLight">{value}</p>
      </div>
    </div>
  );
}
