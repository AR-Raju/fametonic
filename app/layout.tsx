import Navbar from "@/components/Navbar";
import TopGradientBar from "@/components/TopGradientBar";
import type { Metadata } from "next";
import type React from "react";
import { figtree, urbanist } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fametonic",
  description: "Modern glassy card UI component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${figtree.variable} font-sans bg-black relative min-h-screen`}
      >
        <TopGradientBar />
        <Navbar />
        <main className="pb-8">{children}</main>
      </body>
    </html>
  );
}
