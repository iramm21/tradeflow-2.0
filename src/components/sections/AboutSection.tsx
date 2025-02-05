"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUsSection() {
  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discover TradeFlow
          </h2>
          <p className="text-foregroundLight mb-4">
            At TradeFlow, we believe managing your tradie jobs should be as
            intuitive and dynamic as your work. Our platform simplifies project
            management, job tracking, and cost calculations—all in one seamless
            solution.
          </p>
          <p className="text-foregroundLight mb-4">
            Designed for modern professionals, TradeFlow empowers you to stay
            organized, save time, and grow your business without the complexity.
          </p>
          <p className="text-foregroundLight">
            Join our community of forward-thinking tradies and experience a new
            era in job management. Let TradeFlow transform the way you work.
          </p>
          <div className="mt-6">
            <Link
              href="/auth/register"
              className="px-6 py-3 bg-secondary text-white rounded hover:bg-secondary/90 transition-colors"
            >
              Try TradeFlow Now
            </Link>
          </div>
        </div>
        {/* Image Content */}
        <div className="flex-1">
          <Image
            src="/images/about-us.jpg" // Ensure this image exists in public/images/
            alt="Discover TradeFlow"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
