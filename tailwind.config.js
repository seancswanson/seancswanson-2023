/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'skin': ['var(--skin-font)', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    require('tailwindcss-image-rendering')(), // no options to configure

  ],
}
