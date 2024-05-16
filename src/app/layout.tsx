import type { Metadata } from "next";
import "./globals.css";

import { ebgaramond, lexend, merriweather, roboto } from "@/font/font";

export const metadata: Metadata = {
  title: "Polish Cultural Club of Hunter College",
  description: "Website currently in preparations for the club's reopening.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ebgaramond.variable} ${lexend.variable} ${merriweather.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
