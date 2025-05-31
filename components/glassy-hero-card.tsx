"use client";

import Image from "next/image";
import Navbar from "./navbar";
import Button from "./ui/button";

export default function GlassyHeroCard() {
  const PointIcon = () => (
    <Image
      src="/point.png"
      alt="Point icon"
      width={24}
      height={24}
      className="w-5 h-5 sm:w-6 sm:h-6"
    />
  );

  const features = [
    {
      icon: PointIcon,
      text: "Start growing your influence right away—no waiting required!",
    },
    {
      icon: PointIcon,
      text: "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    },
    {
      icon: PointIcon,
      text: "Use a Personal AI Worker to boost your content ",
    },
    {
      icon: PointIcon,
      text: "Learn from expert-led courses designed for aspiring influencers",
    },
  ];

  return (
    <div className="relative w-full mx-auto">
      {/* Main Card Container */}
      <div className="relative animate-in fade-in-0 zoom-in-95 duration-1000">
        <div
          className="relative bg-black/70  px-4 py-6 sm:p-8 md:p-12 overflow-hidden"
          style={{ backgroundColor: "#000000B2" }}
        >
          {/* Top Gradient Bar */}
          <div className="absolute top-0 left-0 right-0 px-2 sm:px-4 py-1.5 sm:py-2 text-center bg-gradient-to-r from-[#FC004E] to-[#10CBE0] z-10">
            <span className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
              🚀 FRESH BEGINNINGS SALE: Extra 25% OFF, Limited Spots - start
              your journey today!
            </span>
          </div>

          <div className="container mx-auto max-w-7xl pt-10 sm:pt-14">
            {/* Logo and Navbar */}
            <Navbar />

            {/* Grid Section */}
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 sm:gap-1 items-center">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8 flex flex-col justify-center">
                {/* Headings */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    Want to Turn Social Media Into a Profitable Career?
                  </h1>
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl text-[#00E7F9] mt-1 font-semibold"
                    style={{
                      textShadow: "2px 2px 0 #FC004E, 4px 4px 10px #FC004E",
                    }}
                  >
                    Discover your way to success with Fametonic:
                  </h2>
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group animate-in slide-in-from-left-5 duration-700"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <feature.icon />
                      <span className="text-white text-sm sm:text-base leading-relaxed">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Terms For Mobile*/}
                <div className="block sm:hidden pt-4 space-y-1">
                  <p className="text-xs text-center sm:text-sm text-white/60">
                    By clicking "Get Started", you agree with Terms and
                    Conditions, Privacy Policy, Subscription Terms.
                  </p>
                  <p className="text-xs text-center text-white/60">
                    Fametonic 2025 ©All Rights Reserved.
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full sm:w-fit"
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
                <div className="hidden sm:block pt-4 space-y-1">
                  <p className="text-xs sm:text-sm text-white/60">
                    By clicking "Get Started", you agree with Terms and
                    Conditions, Privacy Policy, Subscription Terms.
                  </p>
                  <p className="text-xs text-white/60">
                    Fametonic 2025 ©All Rights Reserved.
                  </p>
                </div>
              </div>

              {/* Right Image with Background */}
              <div
                className="relative lg:flex hidden items-center justify-center h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/mobile.svg')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
