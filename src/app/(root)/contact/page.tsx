"use client";

import ContactHero from "@/components/general/sections/contact/ContactHero";
import ContactInfo from "@/components/general/sections/contact/ContactInfo";
import ContactForm from "@/components/general/sections/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section remains full-width */}
      <ContactHero />

      {/* Main content container with responsive padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* On small screens, sections stack vertically */}
          <div className="flex-1 mb-8 md:mb-0">
            <ContactInfo />
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
