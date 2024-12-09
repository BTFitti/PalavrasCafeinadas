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
        'hr-hover/footer': "#57290B",
        'abt-after': "#FBC9A8",
        'cafeteria': "#80451F",
        'contacts-bg': "#F5F3ED",
        'header-txt': "#8F542E"
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

