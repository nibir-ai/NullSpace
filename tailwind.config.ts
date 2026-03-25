import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // NOTHING OS EXACT PALETTE
        nothing: {
          bg: "#000000",           // Pure OLED black
          panel: "#1B1B1D",        // Dark gray panels
          text: "#FFFFFF",
          accent: "#D71921",       // Signature Nothing red
          muted: "#A0A0A0",
          border: "#2A2A2E",
        },
      },
      fontFamily: {
        ndot: ["Space Grotesk", "system-ui", "sans-serif"], // Closest web glyph feel
      },
    },
  },
  plugins: [],
};
export default config;