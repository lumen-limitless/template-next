/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/component/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
