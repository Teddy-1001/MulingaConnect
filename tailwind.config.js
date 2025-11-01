/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables manual dark mode toggling
  content: [
    "./pages/**/*.{html,js}",
    "./javascript/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        green: "#4EA771",
        coffee: "#2B1B0E",
        cream: "#F9F6F1",
        gold: "#D4AF37",
        darkbrown: "#1A120B",
        primary: "#013236",
        accent: "#4EA771",
        "light-green": "#C1E6BA",
        background: "#EAF8E7",
        text: "#013236",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
