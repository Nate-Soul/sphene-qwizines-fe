/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily: {
      raleway: ["Raleway", 'sans-serif']
    },
    extend: {
      colors: {
        'main': '#68b916',
        'main-100': '#5da613',
        'main-200': '#539411',
        'main-300': '#48810f',
        'main-400': '#3e6f0d',
        'main-500': '#345c0b',
        'main-600': '#294a08',
        'main-700': '#1f3706',
        'main-800': '#142504',
        'main-900': '#0a1202',
        'secondary': '#6716b9',
        'secondary-100': '#FF3030',
        'light': '#FFF8DC' 
      }
    },
  },
  plugins: [],
}
