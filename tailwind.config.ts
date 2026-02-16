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
        // CRC Gold theme colors (from logo)
        gold: {
          50: "#faf8f2",
          100: "#f3edd9",
          200: "#e6d9b3",
          300: "#d9c28a",
          400: "#ccab63",
          500: "#D5B054", // Primary gold from logo
          600: "#B8923F", // Primary dark
          700: "#946326",
          800: "#754d1f",
          900: "#5c3c19",
          950: "#3f2710",
        },
        // CRC Dark theme colors (from logo)
        dark: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#cfcfcf",
          300: "#b7b7b7",
          400: "#9f9f9f",
          500: "#878787",
          600: "#6f6f6f",
          700: "#575757",
          800: "#3f3f3f",
          900: "#2F210B", // Secondary dark from logo
          950: "#1a1a1a",
        },
        // Brand colors - primary gold (from logo)
        primary: {
          DEFAULT: "#D5B054",
          dark: "#B8923F",
          light: "#E8C97A",
          50: "#faf8f2",
          100: "#f3edd9",
          200: "#e6d9b3",
          300: "#d9c28a",
          400: "#ccab63",
          500: "#D5B054",
          600: "#B8923F",
          700: "#946326",
          800: "#754d1f",
          900: "#5c3c19",
        },
        // Brand colors - secondary dark (from logo)
        secondary: {
          DEFAULT: "#2F210B",
          light: "#4A3720",
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#cfcfcf",
          300: "#b7b7b7",
          400: "#9f9f9f",
          500: "#878787",
          600: "#6f6f6f",
          700: "#575757",
          800: "#3f3f3f",
          900: "#2F210B",
          950: "#1a1a1a",
        },
        // Background colors
        background: {
          primary: "#FFFFFF",
          secondary: "#F8F8F8",
          alt: "#F0F0F0",
        },
        // Text colors
        text: {
          primary: "#1A1A1A",
          secondary: "#666666",
          muted: "#888888",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
