"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulate form submission; replace with actual API call if needed.
    setFeedback("Thank you for contacting us! We'll get back to you shortly.");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center text-foreground mb-6">
        Send Us a Message
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg"
      >
        <div>
          <label htmlFor="contact-name" className="block text-foreground mb-1">
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
          <label htmlFor="contact-email" className="block text-foreground mb-1">
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
  );
}
