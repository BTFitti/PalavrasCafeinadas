/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/cafes.png')",
      },
      height:{
        '559': '739px'
      },
      colors:{
        'hr': "#B2784A"
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'header': "#8F542E",
      'intro': "#EBDACC"
    })
  },
  plugins: [],
}

