/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      colors: {
        primary: '#166534', // green-800
        secondary: '#15803d', // green-700
        accent: '#d9f99d', // lime-200
      }
    },
  },
  plugins: [],
}
