/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-figtree)"],
        grotesk: ["var(--font-space-grotesk)"],
        syne: ["var(--font-syne)"],
      },
      fontSize: {
        title: "5rem",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        background: {
          light: "#cbc8c4",
          dark: "#33312e",
        },
        warning: "var(--color-burnt-sienna)",
        success: "var(--color-persian-green)",
        mindaro: "var(--mindaro)",
        dune: {
          50: "#f7f7f6",
          100: "#e5e4e2",
          200: "#cbc8c4",
          300: "#aaa49e",
          400: "#888179",
          500: "#6d665f",
          600: "#56514b",
          700: "#47433e",
          800: "#3b3834",
          900: "#33312e", // jet
          950: "#1b1a18",
        },
        eminence: {
          50: "#faf6fe",
          100: "#f3eafd",
          200: "#ead9fb",
          300: "#dabcf6",
          400: "#c390f0",
          500: "#ab66e6",
          600: "#9646d7",
          700: "#8134bc",
          800: "#662c91", // rebecca purple
          900: "#59277c",
          950: "#3c115a",
        },
      },
      keyframes: {
        "gradient-pulse": {
          from: { opacity: 0.1 },
          to: { opacity: 0.8 },
        },
      },
      animation: {
        "gradient-fade": "gradient-pulse 7s ease-in-out alternate infinite",
        "gradient-fade-reverse":
          "gradient-pulse 7s ease-in-out alternate-reverse infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
