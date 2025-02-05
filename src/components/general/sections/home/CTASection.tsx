"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to transform your business?
        </h2>
        <p className="text-sm md:text-lg text-white mb-8">
          Join TradeFlow today and experience a smarter way to manage your jobs.
        </p>
        <Link
          href="/auth/register"
          className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white text-primary font-semibold rounded hover:bg-gray-100 transition-colors text-sm md:text-base"
        >
          Sign Up Now
        </Link>
      </div>
    </section>
  );
}
