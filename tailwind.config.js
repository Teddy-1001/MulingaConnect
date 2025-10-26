/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./javascript/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#013236',
        accent: '#4EA771',
        'light-green': '#C1E6BA',
        background: '#EAF8E7',
        text: '#013236'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}