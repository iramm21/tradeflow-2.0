// src/app/(root)/page.tsx
"use client";

import HeroSection from "@/components/sections/home/HeroSection";
import FeaturesSection from "@/components/sections/home/FeaturesSection";
import CTASection from "@/components/sections/home/CTASection";
import ContactSection from "@/components/sections/home/ContactSection";
import AboutUsSection from "@/components/sections/home/AboutSection";
import PricingSection from "@/components/sections/home/PricingSection";

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
