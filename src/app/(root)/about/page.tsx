"use client";

import AboutHero from "@/components/general/sections/about/AboutHero";
import OurMission from "@/components/general/sections/about/OurMission";
import OurVision from "@/components/general/sections/about/OurVision";
import OurValues from "@/components/general/sections/about/OurValues";
import OurStory from "@/components/general/sections/about/OurStory";
import AboutCTA from "@/components/general/sections/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section stays full-width */}
      <AboutHero />

      {/* Main content container with responsive padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        {/* On small screens, these sections stack vertically.
            On medium and larger screens, they display in two columns. */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex-1 mb-8 md:mb-0">
            <OurMission />
          </div>
          <div className="flex-1">
            <OurVision />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 mt-8">
          <div className="flex-1 mb-8 md:mb-0">
            <OurValues />
          </div>
          <div className="flex-1">
            <OurStory />
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <AboutCTA />
    </div>
  );
}
