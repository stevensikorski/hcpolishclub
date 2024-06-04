import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import { Providers } from "./providers";
import { SEOKeywords } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://hcpolishclub.org"),
  keywords: SEOKeywords,
  title: "Polish Cultural Club of Hunter College",
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
        <Providers>{children}</Providers>
        <FooterComponent />
        <Analytics />
      </body>
    </html>
  );
}
