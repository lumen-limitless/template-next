/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/supercool-ui/src/**/*.tsx',
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
