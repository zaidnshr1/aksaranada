import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F9F9F9",
          dark: "#F0EDE8",
          deeper: "#E8E3DD",
        },
        obsidian: {
          DEFAULT: "#1A1A1A",
          light: "#2C2C2C",
          muted: "#4A4A4A",
        },
        maroon: {
          DEFAULT: "#5B1B1B",
          light: "#7D2A2A",
          dark: "#3D1010",
          accent: "#A03535",
          pale: "#F5E8E8",
        },
        "warm-gray": "#C8C1B8",
        "border-soft": "rgba(26,26,26,0.1)",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "Cambria", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"DM Mono"', "Consolas", "monospace"],
      },
      fontSize: {
        "7xl": ["4.5rem", { lineHeight: "1.02" }],
        "8xl": ["6rem", { lineHeight: "1.0" }],
        "9xl": ["8rem", { lineHeight: "0.97" }],
        "10xl": ["10rem", { lineHeight: "0.93" }],
        "11xl": ["12rem", { lineHeight: "0.9" }],
      },
      letterSpacing: {
        "ultra-wide": "0.25em",
        brand: "0.15em",
        "wide-plus": "0.08em",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.7s ease forwards",
        "slide-right": "slideRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "draw-line": "drawLine 1.2s ease forwards",
        "preloader-out":
          "preloaderOut 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards",
        counter: "counter 2s linear forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        drawLine: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        preloaderOut: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo-in-out": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
