"use client";

import FeatureCard from "@/components/general/cards/FeatureCard";
import { FiSettings, FiTrendingUp, FiUserCheck } from "react-icons/fi";

export default function FeaturesSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            icon={<FiSettings />}
            title="Intuitive Management"
            description="Easily manage your projects, tasks, and team members all in one place."
          />
          <FeatureCard
            icon={<FiTrendingUp />}
            title="Insightful Analytics"
            description="Monitor your performance with real-time analytics and reporting."
          />
          <FeatureCard
            icon={<FiUserCheck />}
            title="Seamless Collaboration"
            description="Work closely with your team with efficient communication and scheduling tools."
          />
        </div>
      </div>
    </section>
  );
}
