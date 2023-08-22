/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        skin: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        "off-white": "#F5F5F5",
      },
      backgroundImage: (theme) => ({
        "highlight-bg": "linear-gradient(2deg, yellow, yellow)",
      }),
      borderRadius: {
        highlight: "20% 25% 20% 24%",
      },
      padding: {
        highlight: "10px 3px 3px 10px",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("not-last", "&:not(:last-child)");
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
    require("tailwindcss-image-rendering")(), // no options to configure
  ],
};
