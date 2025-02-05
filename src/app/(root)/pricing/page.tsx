"use client";

import PricingHero from "@/components/general/sections/pricing/PricingHero";
import PricingPlans from "@/components/general/sections/pricing/PricingPlans";
import PricingFAQ from "@/components/general/sections/pricing/PricingFAQ";

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section remains full-width */}
      <PricingHero />

      {/* Main content container with responsive padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <PricingPlans />
        <PricingFAQ />
      </div>
    </div>
  );
}
