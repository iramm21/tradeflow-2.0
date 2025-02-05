"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle the dropdown menu
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Hide navbar if scrolling down and scrolled more than 100px
      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Auto-close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="bg-gradient-to-r from-primary to-secondary shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-bold text-white cursor-pointer">
              TradeFlow
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/about">
              <span className="text-white hover:text-foregroundLight">
                About
              </span>
            </Link>
            <Link href="/pricing">
              <span className="text-white hover:text-foregroundLight">
                Pricing
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-white hover:text-foregroundLight">
                Contact
              </span>
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 bg-white text-foreground px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <span>
                  {session ? session.user?.name || "Account" : "Account"}
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-10">
                  {session ? (
                    <>
                      <Link href="/dashboard">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Dashboard
                        </div>
                      </Link>
                      <Link href="/account">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          My Account
                        </div>
                      </Link>
                      <Link href="/settings">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Settings
                        </div>
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/auth/login">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Log In
                        </div>
                      </Link>
                      <Link href="/auth/register">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Sign Up
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
