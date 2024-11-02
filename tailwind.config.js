/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-suave': '#A3C9A8',
        'ocre-claro': '#D3B88C',
        'azul-pastel': '#C2D6E1',
        'lila-claro': '#D8C1D1',
        'blanco-crema': '#FAF5E6',
        'gris-suave': '#B3B3B3',
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
