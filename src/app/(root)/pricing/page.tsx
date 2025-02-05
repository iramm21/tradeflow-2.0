"use client";

import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingPlans from "@/components/sections/pricing/PricingPlans";
import PricingFAQ from "@/components/sections/pricing/PricingFAQ";

export default function PricingPage() {
  return (
    <div>
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
    </div>
  );
}
