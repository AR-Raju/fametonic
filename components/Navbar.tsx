import Image from "next/image";
import NavbarClient from "./NavbarClient";

export default function Navbar() {
  return (
    <div className="container mx-auto max-w-7xl relative">
      {/* Desktop Navbar */}
      <nav className="hidden max-w-7xl md:flex items-center justify-between w-full mb-8 md:mb-0 mt-[99px]  px-12  z-50">
        <Image
          src="/logo.png"
          alt="Fametonic Logo"
          width={120}
          height={40}
          className="w-[107px] md:w-[173px] object-contain"
        />

        <div className="flex items-center space-x-8 pr-44">
          <a
            href="#"
            className="text-[#A9A9A9] lg:text-[18px] font-figtree hover:text-[#00E7F9] transition-colors duration-300"
          >
            About us
          </a>
          <a
            href="#"
            className="text-[#A9A9A9] lg:text-[18px] font-figtree hover:text-[#00E7F9] transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Navbar (Client Component) */}
      <NavbarClient />
    </div>
  );
}
