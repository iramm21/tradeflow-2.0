// src/app/layout.tsx
import type { Metadata } from "next";
import "@/styles/globals.css";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";

export const metadata: Metadata = {
  title: "TradeFlow - Manage Your Jobs Easily",
  description:
    "TradeFlow is a SaaS solution designed to help tradies streamline project management, job tracking, and cost calculations efficiently.",
  keywords: [
    "TradeFlow",
    "Project Management",
    "Job Management",
    "Tradies",
    "SaaS",
    "Cost Calculations",
  ],
  authors: [
    { name: "Your Company Name", url: "https://yourcompanydomain.com" },
  ],
  openGraph: {
    title: "TradeFlow - Manage Your Jobs Easily",
    description:
      "Streamline your tradie business with TradeFlow, your go-to solution for managing projects, jobs, and calculations.",
    url: "https://tradeflow.example.com",
    siteName: "TradeFlow",
    images: [
      {
        url: "https://tradeflow.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TradeFlow - Manage Your Jobs Easily",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
