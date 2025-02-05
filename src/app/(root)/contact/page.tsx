"use client";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <div className="flex flex-col md:flex-row">
        {/* Left column: Contact Info */}
        <div className="flex-1">
          <ContactInfo />
        </div>
        {/* Right column: Contact Form */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
