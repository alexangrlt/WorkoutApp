"use client";

import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Hevy Clone",
  description: "A perfect clone of Hevy app in React + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white text-black">
      <head>
        <style>
          {`
            :root {
              --font-inter: ${inter.style.fontFamily};
            }
          `}
        </style>
      </head>
      <body className={`${inter.className} min-h-screen bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
