/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
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
				syne: ["var(--font-syne)"],
				mono: ["var(--font-inconsolata)"],
			},
			fontSize: {
				title: "5rem",
			},
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				dark: "var(--color-dark)",
				light: "var(--color-white)",
				background: {
					light: colors.slate["200"],
					dark: colors.slate["800"],
				},
				warning: "var(--warning-red)",
				success: "var(--success-green)",
				bright: {
					orange: "var(--coral)",
					green: "var(--bright-green)",
					pink: "var(--bright-pink)",
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
