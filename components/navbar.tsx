"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FuturisticSidebar } from "./futurertistic-sidebar";

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
      <nav className="md:hidden flex items-center justify-between w-full relative z-50">
        <Image
          src="/logo.png"
          alt="Fametonic Logo"
          width={120}
          height={40}
          className="w-28 object-contain"
        />
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="text-white p-2"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Futuristic Sidebar */}
      <FuturisticSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
