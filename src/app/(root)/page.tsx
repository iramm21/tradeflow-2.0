// src/app/(root)/page.tsx
"use client";

import HeroSection from "@/components/general/sections/home/HeroSection";
import FeaturesSection from "@/components/general/sections/home/FeaturesSection";
import CTASection from "@/components/general/sections/home/CTASection";
import ContactSection from "@/components/general/sections/home/ContactSection";
import AboutUsSection from "@/components/general/sections/home/AboutSection";
import PricingSection from "@/components/general/sections/home/PricingSection";

export default function HomePage() {
  return (
    <div>
      {/* You can also include custom components in your splash page */}
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <AboutUsSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
