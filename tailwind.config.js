/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./javascript/**/*.js"
  ],
  safelist: [
    // Force generate all custom color classes
    { pattern: /^(bg|text|border|placeholder|caret|ring)-(primary|accent|light-green|background|coffee-brown|coffee-light|gold|cream)$/ },
  ],
  theme: {
    extend: {
      colors: {
        primary: '#013236',
        accent: '#4EA771',
        'light-green': '#C1E6BA',
        background: '#EAF8E7',
        'coffee-brown': '#795b5b',
        'coffee-light': '#f8f3ee',
        gold: '#EEAD2B',
        cream: '#F9F6F1'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        spartan: ['League Spartan', 'sans-serif']
      },
      spacing: {
        'sidebar': '260px'
      }
    }
  },
  plugins: []
};
