/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/app.html", "./src/**/*.{svelte,ts}"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...defaultTheme.colors,
    },
    extend: {
      // fontFamily: {
      //   sans: ["Kumbh\\ Sans", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
};
