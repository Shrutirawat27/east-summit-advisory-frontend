/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          DEFAULT: '#005fcc', 
          dark: '#003d82',   
          light: '#e6f0fa',   
        },
        textMain: '#1e293b', 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)', 
      }
    },
  },
  plugins: [],
}