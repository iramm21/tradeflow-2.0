"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { userId } = useParams(); // Expecting the URL to be /user/[userId]/dashboard

  const navItems = [
    { label: "Home", href: `/user/${userId}/dashboard` },
    { label: "My Account", href: `/user/${userId}/account` },
    { label: "Projects", href: `/user/${userId}/dashboard/projects` },
    { label: "Settings", href: `/user/${userId}/dashboard/settings` },
  ];

  return (
    <aside className="w-64 bg-gray-100 border-r p-4">
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <span
              className={`block px-4 py-2 rounded hover:bg-gray-200 transition-colors ${
                pathname === item.href ? "bg-gray-200 font-bold" : ""
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
