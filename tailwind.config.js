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
          DEFAULT: '#005fcc', // The bright, trustworthy blue from the new design
          dark: '#003d82',    // Darker blue for headings
          light: '#e6f0fa',   // Very light blue for backgrounds
        },
        textMain: '#1e293b',  // Dark grey for readability
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean, modern font
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)', // Soft shadow for the service cards
      }
    },
  },
  plugins: [],
}