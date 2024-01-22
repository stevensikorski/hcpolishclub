import { EB_Garamond, Lexend, Merriweather, Roboto } from "next/font/google";

export const ebgaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-ebgaramond",
});

export const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});
