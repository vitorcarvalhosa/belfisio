/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Montserrat', 'sans-serif'] },
      colors: {
        brand: {
          50: '#f0fdf4', 100: '#dcfce7', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#064e3b',
        }
      }
    },
  },
  plugins: [],
}