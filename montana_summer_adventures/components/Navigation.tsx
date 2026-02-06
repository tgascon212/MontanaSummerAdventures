"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image
              src="/images/logo/msa-logo.png"
              alt="Montana Summer Adventures Logo"
              width={64}
              height={64}
              className="h-14 w-14 md:h-16 md:w-16"
              priority
            />
            <Image
              src="/images/logo/msa-text.png"
              alt="Montana Summer Adventures"
              width={280}
              height={50}
              className="h-7 w-auto md:h-8"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#home" className="text-earth-700 hover:text-earth-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/#activities" className="text-earth-700 hover:text-earth-900 font-medium transition-colors">
              Adventures
            </Link>
            <Link href="/#contact" className="text-earth-700 hover:text-earth-900 font-medium transition-colors">
              Contact
            </Link>
            <Link
              href="/#contact"
              className="bg-earth-600 text-white px-6 py-2.5 rounded-md hover:bg-earth-700 transition-colors font-medium"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-earth-700 hover:text-earth-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#home"
                className="text-earth-700 hover:text-earth-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#activities"
                className="text-earth-700 hover:text-earth-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Adventures
              </Link>
              <Link
                href="/#contact"
                className="text-earth-700 hover:text-earth-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/#contact"
                className="bg-earth-600 text-white px-6 py-2 rounded-md hover:bg-earth-700 transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
