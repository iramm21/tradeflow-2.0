"use client";

import PricingHero from "@/components/general/sections/pricing/PricingHero";
import PricingPlans from "@/components/general/sections/pricing/PricingPlans";
import PricingFAQ from "@/components/general/sections/pricing/PricingFAQ";

export default function PricingPage() {
  return (
    <div>
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
    </div>
  );
}
