// src/components/sections/FeaturesSection.tsx
"use client";

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Project Management</h3>
            <p className="text-gray-600">
              Organize and track your projects with intuitive dashboards and
              analytics.
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Job Tracking</h3>
            <p className="text-gray-600">
              Monitor your job progress and easily manage schedules and tasks.
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Cost Calculations</h3>
            <p className="text-gray-600">
              Automatically compute project costs, margins, and more with
              integrated tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
