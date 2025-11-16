import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 255, 255, 0.05)"
      }
    }
  },
  plugins: []
};

export default config;
