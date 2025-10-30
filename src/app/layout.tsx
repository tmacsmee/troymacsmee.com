import Navigation from "@/components/navigation";
import Shockwave from "@/components/shockwave";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { ViewTransition } from "react";
import "./globals.css";

const inter = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Troy Mackenzie-Smee",
    template: "%s - Troy Mackenzie-Smee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-background min-h-screen font-sans`}
      >
        <Shockwave />
        <div className="sm:pt-20 pt-6 lg:pt-30 mx-auto flex-col gap-y-6 sm:gap-y-0 sm:flex-row flex max-w-7xl px-6 gap-x-12">
          <Navigation />
          <main className="mx-auto max-w-3xl w-full">
            <ViewTransition default="crossfade">{children}</ViewTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
