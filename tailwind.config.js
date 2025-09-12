/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        casino: ['Casino3DFilled', 'sans-serif'],
        gobold: ['Gobold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}