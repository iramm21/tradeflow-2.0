"use client";

import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiClock,
} from "react-icons/fi";

export default function ContactInfo() {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Our Contact Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <FiMail className="text-primary text-3xl lg:text-4xl" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  Email
                </h3>
                <p className="text-sm md:text-base text-foregroundLight">
                  <Link
                    href="mailto:support@tradeflow.example.com"
                    className="text-primary hover:underline"
                  >
                    support@tradeflow.example.com
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <FiPhone className="text-primary text-3xl lg:text-4xl" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  Phone
                </h3>
                <p className="text-sm md:text-base text-foregroundLight">
                  <Link
                    href="tel:+1234567890"
                    className="text-primary hover:underline"
                  >
                    +1 (234) 567-890
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <FiMapPin className="text-primary text-3xl lg:text-4xl" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  Address
                </h3>
                <p className="text-sm md:text-base text-foregroundLight">
                  1234 Tradie Lane, Suite 100, City, Country
                </p>
              </div>
            </div>
          </div>
          {/* Right Column: Social & Extra Info */}
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center space-x-2 mb-2">
                <span>Follow Us</span>
              </h3>
              <p className="text-sm md:text-base text-foregroundLight mb-4">
                Stay updated with our latest news and offers.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="flex items-center space-x-1 text-primary hover:underline"
                >
                  <FiFacebook className="text-3xl lg:text-4xl" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-1 text-primary hover:underline"
                >
                  <FiTwitter className="text-3xl lg:text-4xl" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-1 text-primary hover:underline"
                >
                  <FiInstagram className="text-3xl lg:text-4xl" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <FiClock className="text-primary text-3xl lg:text-4xl" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  Office Hours
                </h3>
                <p className="text-sm md:text-base text-foregroundLight">
                  Mon - Fri: 9am - 6pm <br />
                  Sat: 10am - 4pm <br />
                  Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
