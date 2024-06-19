import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Brown': '#CC6119',
        'Orange': '#FAB637',
        'White': '#FFFFFF',
        "Grey": "#ECEFF3",
        "LightBlack": "#373c3f",
        "Black": "#232628",
        "Blue": "#6C98E1",
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'droid': ['Droid Serif', 'serif']
      }
    },
  },
  plugins: [
    forms,
  ],
}