"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function DashboardHeader() {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  return (
    <header className="bg-primary text-white shadow-md px-4 py-4 flex flex-col md:flex-row items-center justify-between">
      <Link href={userId ? `/user/${userId}/dashboard` : "/auth/login"}>
        <h1 className="text-2xl md:text-3xl font-bold cursor-pointer">
          TradeFlow Dashboard
        </h1>
      </Link>
      <div className="mt-2 md:mt-0 flex items-center space-x-4">
        <span className="font-medium">{session?.user?.name || "Account"}</span>
        <button
          onClick={() => signOut()}
          className="px-3 py-1 bg-secondary text-white rounded hover:bg-secondary/90 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
