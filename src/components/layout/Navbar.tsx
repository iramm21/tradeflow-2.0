"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-primary to-secondary shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-white cursor-pointer">
            TradeFlow
          </span>
        </Link>
        <div className="space-x-6">
          <Link href="/about">
            <span className="text-white hover:text-foregroundLight">About</span>
          </Link>
          <Link href="/pricing">
            <span className="text-white hover:text-foregroundLight">
              Pricing
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-white hover:text-foregroundLight">
              Contact
            </span>
          </Link>
          <Link href="/auth/login">
            <span className="text-white hover:text-foregroundLight">Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
