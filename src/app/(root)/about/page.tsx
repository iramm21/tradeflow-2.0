// pages/about.tsx
import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    // Main container using custom background and foreground colors
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* ========================= */}
        {/* About Hero Section */}
        {/* ========================= */}
        <section id="about-hero" className="bg-backgroundLight py-20">
          <div className="container mx-auto px-6 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">About TradeFlow</h1>
            <p className="mb-6 text-foregroundLight text-center max-w-2xl">
              TradeFlow was created to empower tradie businesses by simplifying
              job management, scheduling, and invoicing.
            </p>
            <div className="w-full md:w-1/2">
              {/* Replace with your own hero image */}
              <Image
                src="/images/about-hero.jpg"
                alt="About TradeFlow"
                width={600}
                height={400}
                layout="responsive"
              />
            </div>
          </div>
        </section>

        {/* ========================= */}
        {/* Our Story Section */}
        {/* ========================= */}
        <section id="our-story" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <p className="text-foregroundLight text-center max-w-3xl mx-auto">
              Founded by industry experts, TradeFlow was born out of the need
              for a comprehensive platform tailored for tradie businesses. We
              understand the challenges of managing a growing business, which is
              why we have crafted a solution that streamlines daily operations,
              allowing you to focus on what you do best.
            </p>
          </div>
        </section>

        {/* ========================= */}
        {/* Our Mission Section */}
        {/* ========================= */}
        <section id="our-mission" className="bg-backgroundLight py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <div className="flex flex-col md:flex-row items-center">
              {/* Mission Text */}
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <p className="text-foregroundLight">
                  Our mission is to empower tradie businesses by providing
                  innovative tools that simplify job management, improve
                  efficiency, and enhance customer service. We strive to create
                  a platform that evolves with your business, supporting you
                  every step of the way.
                </p>
              </div>
              {/* Mission Image */}
              <div className="w-full md:w-1/2">
                {/* Replace with an image relevant to your mission */}
                <Image
                  src="/images/mission.jpg"
                  alt="Our Mission"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================= */}
        {/* Team Section (Optional) */}
        {/* ========================= */}
        <section id="team" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              Meet Our Team
            </h2>
            <p className="text-foregroundLight text-center max-w-3xl mx-auto mb-12">
              Our team is comprised of seasoned professionals with deep
              expertise in both the trades industry and technology.
            </p>
            <div className="flex flex-wrap -mx-4">
              {/* Team Member 1 */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-backgroundLight p-6 rounded shadow">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/team1.jpg"
                      alt="Team Member"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">
                    Alex Johnson
                  </h3>
                  <p className="text-center text-foregroundLight">
                    Co-Founder &amp; CEO
                  </p>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-backgroundLight p-6 rounded shadow">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/team2.jpg"
                      alt="Team Member"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Jamie Smith</h3>
                  <p className="text-center text-foregroundLight">CTO</p>
                </div>
              </div>
              {/* Team Member 3 */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-backgroundLight p-6 rounded shadow">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/team3.jpg"
                      alt="Team Member"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Taylor Lee</h3>
                  <p className="text-center text-foregroundLight">COO</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
