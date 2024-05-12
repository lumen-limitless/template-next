/** @type {import('prettier').Config} */
module.exports = {
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-tailwindcss',
  ],
  tailwindFunctions: ['clsx', 'cn', 'cva'],
};
