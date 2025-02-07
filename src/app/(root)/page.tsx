// pages/index.tsx
import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    // Base container using custom background and foreground colors
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* ========================= */}
        {/* Hero Section */}
        {/* ========================= */}
        <section id="hero" className="bg-backgroundLight py-20">
          <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
            {/* Hero Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">
                Streamline Your Business
              </h2>
              <p className="mb-6 text-foregroundLight">
                TradeFlow is built for tradies. Manage your jobs, schedules, and
                invoices all in one modern, clean platform.
              </p>
              <a
                href="#cta"
                className="bg-primary text-foregroundLightest px-6 py-3 rounded shadow hover:bg-secondary transition duration-300"
              >
                Get Started
              </a>
            </div>
            {/* Hero Image */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              {/* Replace src with your hero image; adjust width/height as needed */}
              <Image
                src="/images/hero-tradeflow.jpg"
                alt="TradeFlow Hero"
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </section>

        {/* ========================= */}
        {/* About Section */}
        {/* ========================= */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              About TradeFlow
            </h2>
            <p className="text-center max-w-2xl mx-auto text-foregroundLight">
              TradeFlow is designed specifically for tradie businesses. Our
              platform helps you keep track of jobs, schedule appointments, and
              streamline invoicing so you can focus on growing your business.
            </p>
          </div>
        </section>

        {/* ========================= */}
        {/* Features Section */}
        {/* ========================= */}
        <section id="features" className="bg-backgroundLight py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
            <div className="flex flex-wrap -mx-4">
              {/* Feature: Job Management */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-background p-6 rounded shadow hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold mb-2">Job Management</h3>
                  <p className="text-foregroundLight">
                    Easily track and manage your jobs from start to finish.
                  </p>
                </div>
              </div>
              {/* Feature: Scheduling */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-background p-6 rounded shadow hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold mb-2">Scheduling</h3>
                  <p className="text-foregroundLight">
                    Keep your appointments and deadlines organized in one place.
                  </p>
                </div>
              </div>
              {/* Feature: Invoicing & Payments */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-background p-6 rounded shadow hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold mb-2">
                    Invoicing &amp; Payments
                  </h3>
                  <p className="text-foregroundLight">
                    Streamline your billing process and manage payments
                    seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= */}
        {/* Pricing Section */}
        {/* ========================= */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
            <div className="flex flex-wrap -mx-4">
              {/* Pricing Card: Basic */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="border border-foregroundLight p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold mb-4">Basic</h3>
                  <p className="text-4xl font-bold mb-4">
                    $9<span className="text-base font-normal">/mo</span>
                  </p>
                  <ul className="text-foregroundLight mb-6 space-y-2">
                    <li>Job Management</li>
                    <li>Scheduling</li>
                    <li>Email Support</li>
                  </ul>
                  <a
                    href="#cta"
                    className="bg-primary text-foregroundLightest px-6 py-2 rounded hover:bg-secondary transition duration-300"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
              {/* Pricing Card: Pro */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="border border-foregroundLight p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold mb-4">Pro</h3>
                  <p className="text-4xl font-bold mb-4">
                    $29<span className="text-base font-normal">/mo</span>
                  </p>
                  <ul className="text-foregroundLight mb-6 space-y-2">
                    <li>All Basic Features</li>
                    <li>Advanced Scheduling</li>
                    <li>Priority Support</li>
                  </ul>
                  <a
                    href="#cta"
                    className="bg-primary text-foregroundLightest px-6 py-2 rounded hover:bg-secondary transition duration-300"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
              {/* Pricing Card: Enterprise */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="border border-foregroundLight p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                  <p className="text-4xl font-bold mb-4">Custom</p>
                  <ul className="text-foregroundLight mb-6 space-y-2">
                    <li>All Pro Features</li>
                    <li>Custom Integrations</li>
                    <li>Dedicated Account Manager</li>
                  </ul>
                  <a
                    href="#contact"
                    className="bg-primary text-foregroundLightest px-6 py-2 rounded hover:bg-secondary transition duration-300"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= */}
        {/* CTA Section */}
        {/* ========================= */}
        <section id="cta" className="bg-primary py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-foregroundLightest mb-4">
              Ready to streamline your business?
            </h2>
            <p className="text-foregroundLightest mb-8">
              Join TradeFlow today and experience hassle-free business
              management.
            </p>
            <a
              href="#contact"
              className="bg-secondary text-foregroundLightest px-8 py-3 rounded shadow hover:bg-accent transition duration-300"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* ========================= */}
        {/* Contact Section */}
        {/* ========================= */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <div className="max-w-xl mx-auto">
              <form className="bg-backgroundLight p-8 rounded shadow">
                {/* Contact Form Field: Name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-foregroundLight mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full p-3 border border-foregroundLight rounded bg-background"
                  />
                </div>
                {/* Contact Form Field: Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-foregroundLight mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full p-3 border border-foregroundLight rounded bg-background"
                  />
                </div>
                {/* Contact Form Field: Message */}
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-foregroundLight mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message"
                    className="w-full p-3 border border-foregroundLight rounded bg-background"
                  ></textarea>
                </div>
                {/* Contact Form Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-foregroundLightest p-3 rounded hover:bg-secondary transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
