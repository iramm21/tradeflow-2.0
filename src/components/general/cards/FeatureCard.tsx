"use client";

import React from "react";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      {icon && (
        <div className="mb-4 flex justify-center">
          <div className="text-primary text-5xl">{icon}</div>
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-foregroundLight text-center">{description}</p>
    </div>
  );
}
