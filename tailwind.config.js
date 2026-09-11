/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        wine: '#2E1526',
        wine2: '#451B33',
        blush: '#E8A5B8',
        blushSoft: '#F3C6D2',
        gold: '#E7C27D',
        cream: '#FBF6EE',
        ink: '#3B2A33',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        hand: ['Caveat', 'cursive'],
        body: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
