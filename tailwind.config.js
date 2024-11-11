/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
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
    screens: {
      'xxs': '300px',
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'main': {
          '50': '#f3fee7',
          '100': '#e5fbcc',
          '200': '#cbf89e',
          '300': '#a8f066',
          '400': '#87e437',
          '500': '#67ca18',
          '600': '#4ea10f',
          '700': '#428612',
          '800': '#336113',
          '900': '#2d5215',
          '950': '#142d06',
        },
        'secondary-500': '#E7EDD8',
        'light-400': '#FAF4F4',
        'light-500': '#F5F5F5',
        'dark-500': '#0F0C0C'
      },
      boxShadow: {
        'custom-1': '0px 8px 10px 0px #00000033',
      }
    },
  },
  plugins: [],
}
