"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-backgroundDarkest text-foregroundLightest py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Copyright Information */}
        <p className="text-xs md:text-sm">
          &copy; {new Date().getFullYear()} TradeFlow. All rights reserved.
        </p>
        {/* Footer Navigation Links */}
        <nav
          className="flex space-x-4 mt-2 md:mt-0"
          aria-label="Footer Navigation"
        >
          <Link href="/about">
            <span className="text-xs md:text-sm hover:text-white">About</span>
          </Link>
          <Link href="/contact">
            <span className="text-xs md:text-sm hover:text-white">Contact</span>
          </Link>
          <Link href="/pricing">
            <span className="text-xs md:text-sm hover:text-white">Pricing</span>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
