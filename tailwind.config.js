/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16a34a',
        secondary: '#dc2626',
        accent: '#f59e0b',
      },
    },
  },
  plugins: [],
};