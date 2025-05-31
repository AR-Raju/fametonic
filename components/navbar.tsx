"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between w-full mb-8">
        <Image
          src="/logo.png"
          alt="Fametonic Logo"
          width={120}
          height={40}
          className="w-28 sm:w-32 object-contain"
        />
        <div className="flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-[#00E7F9] transition-colors duration-300"
          >
            About us
          </a>
          <a
            href="#"
            className="text-white hover:text-[#00E7F9] transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex items-center justify-between w-full">
        <Image
          src="/logo.png"
          alt="Fametonic Logo"
          width={120}
          height={40}
          className="w-28 object-contain"
        />
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-white p-2"
        >
          <Image src="/hamburg.svg" alt="Menu" width={24} height={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-2xl"
            >
              ×
            </button>
            <a
              href="#"
              className="text-white text-2xl hover:text-[#00E7F9] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </a>
            <a
              href="#"
              className="text-white text-2xl hover:text-[#00E7F9] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
