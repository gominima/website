module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navbar: '#110e0e',
        border: '#383838',
        code: '#060404',
        link: '#1fd65f'
      },
    },
  },
  daisyui: {
    darkTheme: "forest"
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
