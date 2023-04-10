/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'navtan': {
        DEFAULT: '#E4D8C9',
      },
    },
    fontFamily: {
      'sourceserif': ['Source Serif Pro', 'serif']
    },
  },
  plugins: [],
}