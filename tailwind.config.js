module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				mons: ['Montserrat', 'sans-serif'],
				fira: ['Fira Code', 'Consolas', 'monospace'],
			},
			colors: {
				navbar: '#110e0e',
				border: '#383838',
				code: '#060404',
				link: '#1fd65f',
			},
		},
	},
	daisyui: {
		darkTheme: 'dracula',
		lightTheme: 'cupcake',
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
