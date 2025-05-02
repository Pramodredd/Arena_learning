'use client'; // For Next.js App Router (optional if using App Directory)

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600">
              BlogSite
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-500">Blog</Link>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-500 flex items-center gap-1">
                Categories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-20">
                <Link href="/categories" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Web Development</Link>
                <Link href="/categories" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">App Development</Link>
                <Link href="/categories" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cyber Security</Link>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link href="/" className="block px-2 py-1 text-gray-700 hover:text-blue-500">Home</Link>
            <Link href="/blog" className="block px-2 py-1 text-gray-700 hover:text-blue-500">Blog</Link>
            
            {/* Mobile Categories Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-500 flex items-center gap-1">
                Categories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-20">
                <Link href="/categories/web-development" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Web Development</Link>
                <Link href="/categories/app-development" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">App Development</Link>
                <Link href="/categories/cyber-security" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cyber Security</Link>
              </div>
            </div>

            <Link href="/about" className="block px-2 py-1 text-gray-700 hover:text-blue-500">About</Link>
            <Link href="/contact" className="block px-2 py-1 text-gray-700 hover:text-blue-500">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
