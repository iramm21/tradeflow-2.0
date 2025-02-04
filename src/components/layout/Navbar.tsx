// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-white cursor-pointer">
            TradeFlow
          </span>
        </Link>
        <div className="space-x-6">
          <Link href="/about">
            <span className="text-white hover:text-gray-200">About</span>
          </Link>
          <Link href="/pricing">
            <span className="text-white hover:text-gray-200">Pricing</span>
          </Link>
          <Link href="/contact">
            <span className="text-white hover:text-gray-200">Contact</span>
          </Link>
          <Link href="/auth/login">
            <span className="text-white hover:text-gray-200">Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
