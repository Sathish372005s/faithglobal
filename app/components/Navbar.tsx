"use client";

import { useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Global Network", href: "/network" },
    { name: "Track", href: "/track" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-md border-b border-navy-light/30">
      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            
            <div className="flex items-center gap-3">
              <img src="/images/logo-global.jpeg" alt="Global Freight Solutions Logo" className="h-10 w-10 rounded-full object-cover border-2 border-white/20 shadow-sm" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">FAITH GLOBAL</span>
                <span className="text-[7px] text-gray-400 uppercase tracking-wide md:text-[10px] lg:text-[8px]"> Delivering Beyond Borders</span>              
                </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-gray-300 hover:text-white relative group py-2 transition-colors"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action / Phone Info */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:8796636150"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-orange-accent transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-navy-light flex items-center justify-center text-orange-accent">
                <FiPhone className="text-base" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Call Experts</span>
                <span className="font-semibold text-white">+91 8796636150</span>
              </div>
            </a>
            <a
              href="/contact"
              className="bg-orange-accent hover:bg-orange-hover text-white text-sm font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-orange-accent/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:8796636150"
              className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-orange-accent hover:bg-navy-light/80 transition-colors"
            >
              <FiPhone className="text-lg" />
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-navy-light focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-navy/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0 pointer-events-auto visible" : "translate-x-full pointer-events-none invisible"
        }`}
        id="mobile-menu"
      >
        <div className="flex flex-col min-h-full justify-between pt-24 pb-8 px-6 space-y-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-200 hover:text-orange-accent py-3 border-b border-navy-light/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            <a
              href="tel:8796636150"
              className="flex items-center gap-3 p-4 rounded-xl bg-navy-light/50 border border-navy-light/40 text-left"
            >
              <FiPhone className="text-xl text-orange-accent" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Direct Hotline</p>
                <p className="font-semibold text-white">+91 8796636150</p>
              </div>
            </a>
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-orange-accent hover:bg-orange-hover text-white font-semibold py-4 rounded-xl shadow-lg transition-all"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
