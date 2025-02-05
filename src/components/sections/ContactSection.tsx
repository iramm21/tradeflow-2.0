"use client";

import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulate form submission; replace with actual API call as needed.
    setFeedback("Thank you for contacting us! We'll get back to you shortly.");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="bg-backgroundDark py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <p className="text-lg text-foregroundLight">
              Have any questions or want to learn more about TradeFlow? Feel
              free to reach out!
            </p>
            <p className="text-foregroundLight">
              Email:{" "}
              <a
                href="mailto:support@tradeflow.example.com"
                className="text-primary hover:underline"
              >
                support@tradeflow.example.com
              </a>
            </p>
            <p className="text-foregroundLight">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-primary hover:underline"
              >
                +1 (234) 567-890
              </a>
            </p>
          </div>
          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white p-6 rounded shadow-lg"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-foreground mb-1"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-foreground mb-1"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-foreground mb-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
              {feedback && (
                <p className="mt-4 text-center text-secondary font-semibold">
                  {feedback}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
