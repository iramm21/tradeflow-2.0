"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to transform your business?
        </h2>
        <p className="text-white text-lg mb-8">
          Join TradeFlow today and experience a smarter way to manage your jobs.
        </p>
        <Link
          href="/auth/register"
          className="px-8 py-4 bg-white text-primary font-semibold rounded hover:bg-gray-100 transition-colors"
        >
          Sign Up Now
        </Link>
      </div>
    </section>
  );
}
