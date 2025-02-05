"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Revolutionize Your Workflow?
        </h2>
        <p className="text-white text-base md:text-lg mb-8">
          Join TradeFlow today and experience a smarter way to manage your
          tradie jobs.
        </p>
        <Link
          href="/auth/register"
          className="px-6 py-3 md:px-8 md:py-4 bg-white text-secondary font-semibold rounded hover:bg-gray-100 transition-colors"
        >
          Sign Up Now
        </Link>
      </div>
    </section>
  );
}
