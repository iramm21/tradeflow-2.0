"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4">
            Welcome to{" "}
            <span className="text-secondary">
              <span className="text-primary">Trade</span>Flow
            </span>
          </h1>
          <p className="text-lg text-foregroundLight mb-8">
            Manage your tradie jobs, projects, and costs with an innovative,
            modern approach.
          </p>
          <div className="space-x-4">
            <Link
              href="/auth/register"
              className="px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/(root)/about"
              className="px-6 py-3 bg-backgroundDark text-foreground rounded hover:bg-backgroundDark/90 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <Image
            src="/images/hero-tradeflow.jpg" // Ensure the image is available in public/images/
            alt="TradeFlow dashboard illustration"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
