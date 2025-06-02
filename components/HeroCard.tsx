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
          <div className="block md:hidden relative w-full h-64">
            <Image
              src="/mobile.svg"
              alt="Mobile"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Hero Section */}
          <div className="md:max-h-screen">
            <div
              className="relative  md:min-h-[679px]
          md-none 
          md:bg-[url('/mobile.svg')] 
          md:bg-no-repeat 
          md:bg-[position:right_center]
          lg:bg-[position:80%_center] 
          bg-black flex items-center"
            >
              <div className="relative z-10 px-5 md:px-12 max-w-7xl mx-auto w-full">
                <div className="md:max-w-lg flex flex-col justify-center items-center gap-[22px] md:gap-[16px]">
                  <div className="text-center md:text-left">
                    <h1 className="font-urbanist font-extrabold text-[25px] md:text-[35px] text-white">
                      Want to Turn Social Media Into a Profitable Career?
                    </h1>
                    <h2
                      className="font-urbanist font-extrabold text-[25px] md:text-[35px] text-[#00E7F9]"
                      style={{
                        textShadow: "2px 2px 0 #FC004E, 4px 4px 10px #FC004E",
                      }}
                    >
                      Discover your way to success with Fametonic:
                    </h2>
                  </div>

                  {/* Feature List */}
                  <FeatureList />

                  <div className="flex flex-col-reverse md:flex-col md:gap-[30px]">
                    {/* CTA Button */}
                    <Button
                      className="mt-8 md:mt-[14px] w-full md:w-[300px] h-[40px] px-10"
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
                    <div className="text-center px-[10px] md:px-0 md:text-left">
                      <p className="font-figtree text-[12px] text-[#ABABAB] mb-[19px] lg:mb-[12px]">
                        By clicking "Get Started", you agree with Terms and
                        Conditions, Privacy Policy, Subscription Terms.
                      </p>
                      <p className="font-figtree text-[10px] text-[#ABABAB]">
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
    </div>
  );
}
