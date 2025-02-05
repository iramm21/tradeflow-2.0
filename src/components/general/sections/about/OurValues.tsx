"use client";

export default function OurValues() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Our Values
        </h2>
        <ul className="space-y-2 md:space-y-4 text-sm md:text-lg text-foregroundLight">
          <li>
            <strong>Integrity:</strong> We are committed to honest and
            transparent service, always putting the needs of our customers
            first.
          </li>
          <li>
            <strong>Innovation:</strong> We strive to push the boundaries of
            technology to deliver modern, efficient solutions.
          </li>
          <li>
            <strong>Collaboration:</strong> We believe in the power of teamwork
            and working together to create the best possible experience.
          </li>
          <li>
            <strong>Excellence:</strong> We aim for the highest quality in every
            aspect of our service, ensuring our customers succeed.
          </li>
        </ul>
      </div>
    </section>
  );
}
