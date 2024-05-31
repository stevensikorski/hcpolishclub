import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export const metadata: Metadata = {
  title: "Polish Cultural Club of Hunter College",
  description: "The Polish Cultural Club of Hunter College fosters cultural exchange and appreciation of Polish heritage among students.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>
        <HeaderComponent />
        {children}
        <FooterComponent />
        <Analytics />
      </body>
    </html>
  );
}
