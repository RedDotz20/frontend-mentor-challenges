/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'header-desktop': "url('/public/bg-header-desktop.png')",
			},
			backgroundColor: {
				'hsl-233': 'hsl(233, 100%, 69%)',
				'hsl-171': 'hsl(171, 66%, 44%)',
			},
		},
	},
	plugins: [],
};