// components/Navbar.js
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-secondary">
          Healthy Home Services
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/services"
            className="text-gray-700 hover:text-secondary transition"
          >
            Services
          </Link>
          <Link
            href="/locations"
            className="text-gray-700 hover:text-secondary transition"
          >
            Locations
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-secondary transition"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-secondary transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-secondary transition"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex gap-3">
          <a
            href="tel:+18885550199"
            className="bg-secondary text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/services"
              className="text-gray-700 hover:text-secondary"
            >
              Services
            </Link>
            <Link
              href="/locations"
              className="text-gray-700 hover:text-secondary"
            >
              Locations
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-secondary">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-secondary">
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-secondary"
            >
              Contact
            </Link>
            <a
              href="tel:+18885550199"
              className="bg-secondary text-white px-4 py-2 rounded-lg font-semibold text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
