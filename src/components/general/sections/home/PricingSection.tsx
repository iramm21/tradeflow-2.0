"use client";

import PricingCard from "@/components/general/cards/PricingCard";

export default function PricingSection() {
  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard
            title="Basic"
            price="$9.99"
            billingPeriod="month"
            features={[
              "Manage up to 5 projects",
              "Basic analytics",
              "Email support",
            ]}
            buttonText="Get Started"
            buttonLink="/auth/register"
          />
          <PricingCard
            title="Pro"
            price="$19.99"
            billingPeriod="month"
            features={[
              "Manage unlimited projects",
              "Advanced analytics",
              "Priority email support",
              "Team collaboration",
            ]}
            buttonText="Choose Pro"
            buttonLink="/auth/register"
            isHighlighted
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            billingPeriod="contact us"
            features={[
              "Custom project management",
              "Dedicated support",
              "Advanced integrations",
              "Onboarding assistance",
            ]}
            buttonText="Contact Us"
            buttonLink="/contact"
          />
        </div>
      </div>
    </section>
  );
}
