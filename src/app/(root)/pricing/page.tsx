// pages/pricing.tsx
import React from "react";

const Pricing: React.FC = () => {
  return (
    // Main container using custom background and foreground colors
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* ========================= */}
        {/* Pricing Hero Section */}
        {/* ========================= */}
        <section id="pricing-hero" className="bg-backgroundLight py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Choose the Plan That&apos;s Right for You
            </h1>
            <p className="mb-8 text-foregroundLight">
              Flexible pricing plans designed to grow with your business. No
              hidden fees, cancel anytime.
            </p>
          </div>
        </section>

        {/* ========================= */}
        {/* Pricing Options Section */}
        {/* ========================= */}
        <section id="pricing-options" className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap -mx-4">
              {/* Pricing Card: Basic */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="border border-foregroundLight p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                  <h2 className="text-2xl font-bold mb-4">Basic</h2>
                  <p className="text-4xl font-bold mb-4">
                    $9<span className="text-base font-normal">/mo</span>
                  </p>
                  <ul className="text-foregroundLight mb-6 space-y-2">
                    <li>Job Management</li>
                    <li>Scheduling</li>
                    <li>Email Support</li>
                  </ul>
                  <a
                    href="/signup"
                    className="bg-primary text-foregroundLightest px-6 py-2 rounded hover:bg-secondary transition duration-300"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
              {/* Pricing Card: Pro */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="border border-foregroundLight p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                  <h2 className="text-2xl font-bold mb-4">Pro</h2>
                  <p className="text-4xl font-bold mb-4">
                    $29<span className="text-base font-normal">/mo</span>
                  </p>
                  <ul className="text-foregroundLight mb-6 space-y-2">
                    <li>All Basic Features</li>
                    <li>Advanced Scheduling</li>
                    <li>Priority Support</li>
                  </ul>
                  <a
                    href="/signup"
                    className="bg-primary text-foregroundLightest px-6 py-2 rounded hover:bg-secondary transition duration-300"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
              {/* Pricing Card: Enterprise */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="border border-foregroundLight p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                  <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
                  <p className="text-4xl font-bold mb-4">Custom</p>
                  <ul className="text-foregroundLight mb-6 space-y-2">
                    <li>All Pro Features</li>
                    <li>Custom Integrations</li>
                    <li>Dedicated Account Manager</li>
                  </ul>
                  <a
                    href="/contact"
                    className="bg-primary text-foregroundLightest px-6 py-2 rounded hover:bg-secondary transition duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= */}
        {/* FAQ Section (Optional) */}
        {/* ========================= */}
        <section id="faq" className="bg-backgroundLight py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="border-b border-foregroundLight pb-4">
                <h3 className="text-xl font-semibold">
                  What is included in the Basic plan?
                </h3>
                <p className="mt-2 text-foregroundLight">
                  The Basic plan includes essential features like job
                  management, scheduling, and email support to help you get
                  started.
                </p>
              </div>
              {/* FAQ Item 2 */}
              <div className="border-b border-foregroundLight pb-4">
                <h3 className="text-xl font-semibold">
                  Can I upgrade my plan later?
                </h3>
                <p className="mt-2 text-foregroundLight">
                  Absolutely! You can upgrade or downgrade your plan at any time
                  to fit your business needs.
                </p>
              </div>
              {/* FAQ Item 3 */}
              <div className="border-b border-foregroundLight pb-4">
                <h3 className="text-xl font-semibold">
                  Is there a free trial available?
                </h3>
                <p className="mt-2 text-foregroundLight">
                  Yes, we offer a free trial period so you can test out the
                  platform before committing to a plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= */}
        {/* CTA Section */}
        {/* ========================= */}
        <section id="pricing-cta" className="bg-primary py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-foregroundLightest mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-foregroundLightest mb-8">
              Choose your plan and begin streamlining your business operations
              today.
            </p>
            <a
              href="/signup"
              className="bg-secondary text-foregroundLightest px-8 py-3 rounded shadow hover:bg-accent transition duration-300"
            >
              Sign Up Now
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
