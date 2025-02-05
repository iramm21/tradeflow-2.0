"use client";

import AboutHero from "@/components/general/sections/about/AboutHero"; // If you want a hero banner on your about page
import OurMission from "@/components/general/sections/about/OurMission";
import OurVision from "@/components/general/sections/about/OurVision";
import OurValues from "@/components/general/sections/about/OurValues";
import OurStory from "@/components/general/sections/about/OurStory";
import AboutCTA from "@/components/general/sections/about/AboutCTA"; // Optional call-to-action

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
