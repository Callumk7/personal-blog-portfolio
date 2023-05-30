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
            },
            fontSize: {
                title: "10rem",
            },
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                tertiary: "var(--color-tertiary)",
                quaternary: "var(--color-quaternary)",
                quinary: "var(--color-quinary)",
            },
            keyframes: {
                "background-rotate": {
                    "0%": { transform: "rotate(3deg)" },
                    "50%": { transform: "rotate(179deg)" },
                    "100%": { transform: "rotate(-3deg)" },
                },
            },
            animation: {
                "background-gradient": "background-rotate 14s ease infinite",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
