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
                sans: ["var(--font-inter)"],
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
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
