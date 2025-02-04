// src/app/(root)/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div>
      {/* You can also include custom components in your splash page */}
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
