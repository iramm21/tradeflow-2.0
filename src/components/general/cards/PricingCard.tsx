"use client";

import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  billingPeriod: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  isHighlighted?: boolean;
}

export default function PricingCard({
  title,
  price,
  billingPeriod,
  features,
  buttonText,
  buttonLink,
  isHighlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`p-4 md:p-8 rounded-lg shadow-md transition-all duration-300 ${
        isHighlighted
          ? "bg-primary text-white transform scale-105"
          : "bg-white text-foreground"
      }`}
    >
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
        {title}
      </h3>
      <div className="text-center mb-6">
        <span className="text-3xl md:text-4xl font-extrabold">{price}</span>
        <span className="text-base md:text-lg font-medium">
          /{billingPeriod}
        </span>
      </div>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="inline-block mr-2 text-primary">✓</span>
            <span className="text-sm md:text-base">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <a
          href={buttonLink}
          className={`inline-block px-4 py-2 md:px-6 md:py-3 rounded transition-colors ${
            isHighlighted
              ? "bg-white text-primary hover:bg-gray-200"
              : "bg-primary text-white hover:bg-primary/90"
          } text-sm md:text-base`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
