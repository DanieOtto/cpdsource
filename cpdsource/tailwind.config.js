/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: '#ffed4a',
      }
    },
  },
  plugins: [],
}

