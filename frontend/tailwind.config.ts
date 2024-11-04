import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f5f5dc", // Color crema para fondo
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        itim: ["Itim", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
