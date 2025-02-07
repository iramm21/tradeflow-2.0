// src/app/layout.tsx
import type { Metadata } from "next";
import "@/styles/globals.css";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <head>
        {/* Favicon and Fonts */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        {/* Additional meta tags can be added here */}
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <SessionProviderWrapper>
          <SpeedInsights />
          <main className="flex-grow">{children}</main>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
