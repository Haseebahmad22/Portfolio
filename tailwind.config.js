/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.25rem'
      },
      colors: {
        brand: {
          blue: '#3B82F6',
          violet: '#8B5CF6'
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
};