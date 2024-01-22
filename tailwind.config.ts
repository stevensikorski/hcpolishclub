import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        ebgaramond: ["--font-ebgaramond"],
        merriweather: ["--font-merriweather"],
        roboto: ["--font-roboto"],
      },
      colors: {
        czerwony: "#DC143C",
        primary: "#09090b",
        secondary: "#52525b",
        tertiary: "#a1a1aa",
      },
    },
  },
  plugins: [],
};
export default config;
