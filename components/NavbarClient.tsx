"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FuturisticSidebar } from "./FuturertisticSidebar";

export default function NavbarClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="md:hidden container max-w-7xl relative flex items-center w-full mt-24 h-16 px-4 z-50">
        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/logo.png"
            alt="Fametonic Logo"
            width={120}
            height={40}
            className="w-28 object-contain"
          />
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="ml-auto text-white p-2"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Sidebar Toggle */}
      <FuturisticSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
