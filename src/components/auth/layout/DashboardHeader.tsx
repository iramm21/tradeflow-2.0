"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function DashboardHeader() {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  return (
    <header className="bg-primary text-white shadow-md px-4 py-4 flex flex-col md:flex-row items-center justify-between">
      {/* Dashboard Title & Home Link */}
      <Link href={userId ? `/user/${userId}/dashboard` : "/auth/login"}>
        {/* 
          Using an anchor tag here helps with accessibility.
          The aria-label provides additional context for screen readers.
        */}
        <span aria-label="Go to Dashboard Home">
          <h1 className="text-2xl md:text-3xl font-bold cursor-pointer">
            TradeFlow Dashboard
          </h1>
        </span>
      </Link>

      {/* User Info & Logout Button */}
      <div className="mt-2 md:mt-0 flex items-center space-x-4">
        <span className="font-medium">{session?.user?.name || "Account"}</span>
        <button
          onClick={() => signOut()}
          aria-label="Logout"
          className="px-3 py-1 bg-secondary text-white rounded hover:bg-secondary/90 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
