import Image from "next/image";
import NavbarClient from "./NavbarClient";

export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden container max-w-7xl mx-auto md:flex items-center justify-between w-full mb-8 mt-20 px-8 z-50">
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
            className="text-white lg:text-[18px] font-figtree hover:text-[#00E7F9] transition-colors duration-300"
          >
            About us
          </a>
          <a
            href="#"
            className="text-white lg:text-[18px] font-figtree hover:text-[#00E7F9] transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Navbar (Client Component) */}
      <NavbarClient />
    </>
  );
}
