"use client";

import Link from "next/link";

interface Project {
  id: string;
  name: string;
  status: string;
}

interface RecentProjectsCardProps {
  projects: Project[];
}

export default function RecentProjectsCard({
  projects,
}: RecentProjectsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
        Recent Projects
      </h3>
      {projects.length > 0 ? (
        <ul className="space-y-2">
          {projects.map((project) => (
            <li key={project.id} className="flex justify-between items-center">
              <span className="text-sm md:text-base text-foregroundLight">
                {project.name}
              </span>
              <Link href={`/project/${project.id}`}>
                <span className="text-primary text-sm md:text-base hover:underline">
                  View
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm md:text-base text-foregroundLight">
          No recent projects available.
        </p>
      )}
    </div>
  );
}
