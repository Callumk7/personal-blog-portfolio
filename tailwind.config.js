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
				title: "8rem",
			},
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				tertiary: "var(--color-tertiary)",
				quaternary: "var(--color-quaternary)",
				quinary: "var(--color-quinary)",
			},
			keyframes: {
				"gradient-pulse": {
					from: { opacity: 0.1 },
					to: { opacity: 1 },
				},
			},
			animation: {
				"gradient-fade": "gradient-pulse 7s ease-in-out alternate infinite",
				"gradient-fade-reverse": "gradient-pulse 7s ease-in-out alternate-reverse infinite",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
