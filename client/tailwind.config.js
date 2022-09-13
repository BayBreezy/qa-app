const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				dark: "#030008",
				primary: {
					DEFAULT: colors.violet[500],
					...colors.violet,
				},
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
};
