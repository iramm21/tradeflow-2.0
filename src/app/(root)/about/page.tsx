"use client";

import AboutHero from "@/components/sections/about/AboutHero"; // If you want a hero banner on your about page
import OurMission from "@/components/sections/about/OurMission";
import OurVision from "@/components/sections/about/OurVision";
import OurValues from "@/components/sections/about/OurValues";
import OurStory from "@/components/sections/about/OurStory";
import AboutCTA from "@/components/sections/about/AboutCTA"; // Optional call-to-action

export default function AboutPage() {
  return (
    <div>
      {/* Optional hero/banner for the about page */}
      <AboutHero />
      <OurMission />
      <OurVision />
      <OurValues />
      <OurStory />
      <AboutCTA />
    </div>
  );
}
