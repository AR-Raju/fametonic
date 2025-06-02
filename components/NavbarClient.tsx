import Image from "next/image";

export default function NavbarClient() {
  return (
    <>
      <nav className="md:hidden container max-w-7xl relative flex items-center w-full mt-24 h-16 px-3 z-50">
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
        <button className="ml-auto text-white p-2">
          <Image
            src="/hamburger.svg"
            alt="Menu"
            width={20}
            height={12}
            className="w-5 h-3 object-contain"
            style={{
              filter: "drop-shadow(2px 2px 10px rgba(0, 231, 249, 0.5))",
            }}
            priority
            loading="eager"
            draggable="false"
          />
        </button>
      </nav>
    </>
  );
}
