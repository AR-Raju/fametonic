import Image from "next/image";
import FeatureList from "./FeatureList";
import Button from "./ui/Button";

export default function GlassyHeroCard() {
  return (
    <div className="relative animate-in fade-in-0 zoom-in-95 duration-1000">
      <div
        className="relative bg-black/70 overflow-hidden"
        style={{ backgroundColor: "#000000B2" }}
      >
        <div className="container mx-auto max-w-7xl relative">
          {/* Image for Mobile */}
          <div className="block md:hidden relative w-full h-64 ">
            <Image
              src="/mobile.svg"
              alt="Mobile"
              height={256}
              width={256}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

          {/* Hero Section */}
          <div className="md:max-h-screen">
            <div
              className="relative  md:min-h-[600px] 
          md-none 
          md:bg-[url('/mobile.svg')] 
          md:bg-no-repeat 
          md:bg-[position:right_center]
          lg:bg-[position:75%_center] 
          bg-black"
            >
              <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="md:max-w-2xl flex flex-col justify-center">
                  <div className="text-center md:text-left">
                    <h1 className="font-urbanist font-extrabold text-[25px] md:text-[35px] text-white">
                      Want to Turn Social Media Into a Profitable Career?
                    </h1>
                    <h2
                      className="font-urbanist font-extrabold text-[25px] md:text-[35px] text-[#00E7F9] mb-[27px]"
                      style={{
                        textShadow: "2px 2px 0 #FC004E, 4px 4px 10px #FC004E",
                      }}
                    >
                      Discover your way to success with Fametonic:
                    </h2>
                  </div>

                  {/* Feature List */}
                  <FeatureList />

                  {/* CTA Button */}
                  <Button
                    className="mt-8 w-full sm:w-[300px] h-[40px] px-10 py-2"
                    rightIcon={
                      <Image
                        src="/arrow-right.svg"
                        height={8}
                        width={8}
                        alt="arrow-right"
                      />
                    }
                  />

                  {/* Terms */}
                  <div className="pt-4 text-center sm:text-left">
                    <p className="font-figtree text-[12px] text-gray-300 mb-[27px]">
                      By clicking "Get Started", you agree with Terms and
                      Conditions, Privacy Policy, Subscription Terms.
                    </p>
                    <p className="font-figtree text-[10px] text-gray-400">
                      Fametonic 2025 © All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
