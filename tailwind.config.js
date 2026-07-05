/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1c1917', // Dark background matching your design
        'brand-red': '#991b1b',  // Crimson red accent
      }
    },
  },
  plugins: [],
}