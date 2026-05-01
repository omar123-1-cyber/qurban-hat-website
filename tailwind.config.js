/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
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