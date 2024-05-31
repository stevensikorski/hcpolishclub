import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        czerwony: "#DC143C",
        czarny: "#09090B",
        szary: "#52525B",
        srebro: "#A1A1AA",
        bialy: "#FFF2F2",
      },
      screens: {
        mobile: "0px",
        tablet: "768px",
        desktop: "1280px",
      },
      height: {
        banner: "calc(50vh - 4rem)",
        landing: "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [],
};
export default config;
