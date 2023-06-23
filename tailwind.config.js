/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121421',
        'white-dim': '#FEFEFE',
        'primary-light': '#383a48',
        'primary-dark': '#000',
        secondary: '#36f1cd',
        'secondary-light': '#7bffff',
        'secondary-dark': '#00bd9c',
        error: '#ff6663',
      },
    },

    plugins: [],
  },
};
