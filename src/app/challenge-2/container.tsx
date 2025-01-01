"use client";

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      {/* Desktop Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <a href="/" className="text-xl font-bold">
            TechSpace
          </a>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/" className="hover:text-gray-300">
              About
            </a>
            <a href="/" className="hover:text-gray-300">
              Services
            </a>
            <a href="/" className="hover:text-gray-300">
              Contact
            </a>
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-700 text-white px-4 py-1 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 hover:bg-gray-700 rounded-md"
            >
              Home
            </a>
            <a
              href="/"
              className="block px-3 py-2 hover:bg-gray-700 rounded-md"
            >
              About
            </a>
            <a
              href="/"
              className="block px-3 py-2 hover:bg-gray-700 rounded-md"
            >
              Services
            </a>
            <a
              href="/"
              className="block px-3 py-2 hover:bg-gray-700 rounded-md"
            >
              Contact
            </a>
            {/* Mobile Search Input */}
            <div className="relative px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-700 text-white px-4 py-1 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
