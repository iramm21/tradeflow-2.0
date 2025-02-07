// pages/contact.tsx
import React from "react";

const Contact: React.FC = () => {
  return (
    // Main container using custom background and foreground colors
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* ========================= */}
        {/* Contact Hero Section */}
        {/* ========================= */}
        <section id="contact-hero" className="bg-backgroundLight py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-foregroundLight mb-8">
              We would love to hear from you. Fill out the form below and we&apos;ll
              get back to you soon.
            </p>
          </div>
        </section>

        {/* ========================= */}
        {/* Contact Form Section */}
        {/* ========================= */}
        <section id="contact-form" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto bg-backgroundLight p-8 rounded shadow">
              <form>
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
                    placeholder="Your Name"
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
                    placeholder="Your Email"
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
                    rows={5}
                    placeholder="Your Message"
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

export default Contact;
