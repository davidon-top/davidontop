/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#22d3ee",
				secondary: "#0891b2",
				accent: "#16a34a",
				neutral: "#0a0a0a",
				info: "#3abff8",
				success: "#36d399",
				warning: "#fbbd23",
				error: "#f87272",
				bckgd: "#050505",
				bckg: "#0a0a0a",
				bckgl: "#242424",
				bckg2l: "#3d3d3d",
			}
		},
	},
	daisyui: {
		themes: [
			{
				theme: {
					primary: "#22d3ee",
					secondary: "#0891b2",
					accent: "#16a34a",
					neutral: "#0a0a0a",
					"base-100": "#0a0a0a",
					info: "#3abff8",
					success: "#36d399",
					warning: "#fbbd23",
					error: "#f87272",
				}
			}
		]
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('daisyui')
	],
}
