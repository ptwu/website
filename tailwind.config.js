/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navtan: {
          DEFAULT: '#E4D8C9',
        },
      },
      fontFamily: {
        sourcepro: ['"Source Serif Pro"', 'serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      invert: {
        95: '.95'
      }
    }
  },
  plugins: [],
}