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
        // CRC Gold theme colors
        gold: {
          50: "#faf8f2",
          100: "#f3edd9",
          200: "#e6d9b3",
          300: "#d9c28a",
          400: "#ccab63",
          500: "#c4943c", // Primary gold
          600: "#b37d2f",
          700: "#946326",
          800: "#754d1f",
          900: "#5c3c19",
          950: "#3f2710",
        },
        // CRC Black/Dark theme colors
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
          900: "#272727",
          950: "#1a1a1a",
        },
        // Brand colors - primary gold
        primary: {
          DEFAULT: "#c4943c",
          dark: "#946326",
          light: "#d9c28a",
        },
        // Brand colors - secondary dark
        secondary: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#cfcfcf",
          300: "#b7b7b7",
          400: "#9f9f9f",
          500: "#878787",
          600: "#6f6f6f",
          700: "#575757",
          800: "#3f3f3f",
          900: "#272727",
          950: "#1a1a1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
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
