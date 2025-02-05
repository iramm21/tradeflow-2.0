"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-backgroundLight">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4">
            Welcome to{" "}
            <span className="text-secondary">
              <span className="text-primary">Trade</span>Flow
            </span>
          </h1>
          <p className="text-base md:text-lg text-foregroundLight mb-8">
            Manage your tradie jobs, projects, and costs with an innovative,
            modern approach.
          </p>
          <div className="space-x-2 md:space-x-4">
            <Link
              href="/auth/register"
              className="inline-block px-4 md:px-6 py-2 md:py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm md:text-base"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="inline-block px-4 md:px-6 py-2 md:py-3 bg-backgroundDark text-foreground rounded hover:bg-backgroundDark/90 transition-colors text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <Image
            src="/images/hero-tradeflow.jpg" // Ensure the image is available in public/images/
            alt="TradeFlow dashboard illustration"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
