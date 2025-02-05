"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-backgroundDarkest text-foregroundLightest py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TradeFlow. All rights reserved.
        </p>
        <div className="space-x-4">
          <Link href="/(root)/about">
            <span className="hover:text-white text-sm">About</span>
          </Link>
          <Link href="/(root)/contact">
            <span className="hover:text-white text-sm">Contact</span>
          </Link>
          <Link href="/(root)/pricing">
            <span className="hover:text-white text-sm">Pricing</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
