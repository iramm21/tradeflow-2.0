"use client";

export default function PricingFAQ() {
  return (
    <section className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold text-foreground">
              How does the billing work?
            </h3>
            <p className="text-foregroundLight mt-2">
              Billing is monthly, with no hidden fees. Choose a plan that fits
              your needs and upgrade or downgrade at any time.
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold text-foreground">
              Can I cancel anytime?
            </h3>
            <p className="text-foregroundLight mt-2">
              Yes, you can cancel your subscription at any time. Your access
              will remain active until the end of your billing cycle.
            </p>
          </div>
          {/* Add additional FAQ items as needed */}
        </div>
      </div>
    </section>
  );
}
