import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import { SEOKeywords } from "@/library/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://hcpolishclub.org"),
  keywords: SEOKeywords,
  title: { default: "Polish Cultural Club of Hunter College", template: "%s | Polish Cultural Club of Hunter College" },
  openGraph: {
    description: "The Polish Cultural Club of Hunter College fosters cultural exchange and appreciation of Polish heritage among students.",
    images: ["/HunterMeta.png"],
  },
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
