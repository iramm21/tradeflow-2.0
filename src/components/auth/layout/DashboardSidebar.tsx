"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function DashboardSidebar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { userId } = useParams(); // Expecting the URL to be /user/[userId]/dashboard

  const navItems = [
    { label: "Home", href: `/user/${userId}/dashboard` },
    { label: "My Account", href: `/user/${userId}/account` },
    { label: "Projects", href: `/user/${userId}/dashboard/projects` },
    { label: "Settings", href: `/user/${userId}/dashboard/settings` },
  ];

  // Close sidebar when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        open &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setOpen(!open)}
          className="text-primary focus:outline-none"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-100 border-r p-4 transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 rounded hover:bg-gray-200 transition-colors ${
                  pathname === item.href ? "bg-gray-200 font-bold" : ""
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block md:w-64">
        <aside className="bg-gray-100 border-r p-4 min-h-screen">
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
      </div>
    </>
  );
}
