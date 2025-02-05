"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4">
            About
          </h1>
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4">
            TradeFlow
          </h1>
          <p className="text-lg text-foregroundLight mb-6">
            We&apos;re dedicated to revolutionizing the way tradies manage their
            work. Our mission is to simplify project management and empower you
            to focus on what you do best.
          </p>
          <Link
            href="/auth/register"
            className="px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src="/images/about-hero.jpg" // ensure you have this image in public/images
            alt="About TradeFlow"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
