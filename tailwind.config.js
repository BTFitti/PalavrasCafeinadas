/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/cafes.png')"
      },
      colors:{
        'hr': "#B2784A",
        'hr-hover': "#57290B"
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

