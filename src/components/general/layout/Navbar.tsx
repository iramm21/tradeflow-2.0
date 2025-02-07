"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown for desktop account menu
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  // Toggle mobile navigation menu
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  // Hide or show navbar on scroll for better UX
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
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

  // Close dropdown when clicking outside
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleMobileMenuClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleMobileMenuClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleMobileMenuClickOutside);
  }, [mobileMenuOpen]);

  // Build account-related links based on session status
  const userId = session?.user?.id;
  const dashboardLink = userId ? `/user/${userId}/dashboard` : "/auth/login";
  const accountLink = userId ? `/user/${userId}/account` : "/auth/login";
  const settingsLink = userId
    ? `/user/${userId}/dashboard/settings`
    : "/auth/login";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-gradient-to-r from-primary to-secondary shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-bold text-white cursor-pointer">
              TradeFlow
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about">
              <span className="text-white hover:text-gray-200">About</span>
            </Link>
            <Link href="/pricing">
              <span className="text-white hover:text-gray-200">Pricing</span>
            </Link>
            <Link href="/contact">
              <span className="text-white hover:text-gray-200">Contact</span>
            </Link>
            {/* Account Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                className="flex items-center space-x-2 bg-white text-foreground px-3 py-1 rounded-full hover:bg-gray-200 transition-colors focus:outline-none"
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
                      <Link href={dashboardLink}>
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Dashboard
                        </div>
                      </Link>
                      <Link href={accountLink}>
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          My Account
                        </div>
                      </Link>
                      <Link href={settingsLink}>
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
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden bg-gradient-to-r from-primary to-secondary"
          >
            <div className="px-4 py-2 space-y-2 flex flex-col">
              <Link href="/about">
                <span className="text-white hover:text-gray-200">About</span>
              </Link>
              <Link href="/pricing">
                <span className="text-white hover:text-gray-200">Pricing</span>
              </Link>
              <Link href="/contact">
                <span className="text-white hover:text-gray-200">Contact</span>
              </Link>
              {session ? (
                <>
                  <Link href={dashboardLink}>
                    <span className="text-white hover:text-gray-200">
                      Dashboard
                    </span>
                  </Link>
                  <Link href={accountLink}>
                    <span className="text-white hover:text-gray-200">
                      My Account
                    </span>
                  </Link>
                  <Link href={settingsLink}>
                    <span className="text-white hover:text-gray-200">
                      Settings
                    </span>
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      toggleMobileMenu();
                    }}
                    className="text-white text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/auth/login">
                    <span className="text-white hover:text-gray-200">
                      Log In
                    </span>
                  </Link>
                  <Link href="/auth/register">
                    <span className="text-white hover:text-gray-200">
                      Sign Up
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
