import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00C8C8",
          50:  "#e6fafa",
          100: "#b3f0f0",
          200: "#80e6e6",
          300: "#4ddbdb",
          400: "#1ad1d1",
          500: "#00C8C8",
          600: "#00a0a0",
          700: "#007878",
          800: "#005050",
          900: "#002828",
        },
        charcoal: {
          DEFAULT: "#1B1B1B",
          50:  "#f6f6f6",
          100: "#e0e0e0",
          200: "#b8b8b8",
          300: "#909090",
          400: "#686868",
          500: "#505050",
          600: "#404040",
          700: "#323232",
          800: "#282828",
          900: "#1B1B1B",
          950: "#111111",
        },
        silver: {
          DEFAULT: "#A8B8C0",
          100: "#f0f4f6",
          200: "#d8e4e8",
          300: "#C0D0D8",
          400: "#A8B8C0",
          500: "#8898A0",
          600: "#687880",
          700: "#485860",
          800: "#283840",
          900: "#182028",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)",    "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia",   "serif"],
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease-out forwards",
        "fade-in":   "fadeIn 0.6s ease-out forwards",
        "float":     "float 3s ease-in-out infinite",
        "pulse-glow":"pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,200,200,0.3)" },
          "50%":      { boxShadow: "0 0 40px rgba(0,200,200,0.6)" },
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #00C8C8 0%, #007878 100%)",
        "dark-gradient":  "linear-gradient(135deg, #1B1B1B 0%, #2d2d2d 100%)",
        "hero-gradient":  "linear-gradient(to right, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.7) 60%, rgba(17,17,17,0.2) 100%)",
      },
      boxShadow: {
        "luxury":     "0 20px 60px rgba(0,0,0,0.18)",
        "luxury-lg":  "0 30px 80px rgba(0,0,0,0.25)",
        "glow-brand": "0 0 30px rgba(0,200,200,0.35)",
        "glow-lg":    "0 0 60px rgba(0,200,200,0.2)",
        "card":       "0 4px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
