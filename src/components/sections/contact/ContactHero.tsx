"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-96">
      <Image
        src="/images/contact-hero.jpg" // Place a high-quality image in public/images/
        alt="Contact TradeFlow"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-white">
          Have questions or need support? We&apos;re here to help.
        </p>
      </div>
    </section>
  );
}
