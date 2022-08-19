/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/app.html", "./src/**/*.{svelte,ts}"],
  darkMode: ["class", "theme-dark"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "hsl(0, 0, 100%)",
      light: {
        main: "hsl(0, 0%, 90%)",
        screen: "hsl(0, 0%, 93%)",
        keypad: "hsl(0, 5%, 81%)",
        action: "hsl(185, 42%, 37%)",
        "action-shadow": "hsl(185, 58%, 25%)",
        equal: "hsl(25, 98%, 40%)",
        "equal-shadow": "hsl(25, 99%, 27%)",
        digit: "hsl(45, 7%, 89%)",
        "digit-shadow": "hsl(35, 11%, 61%)",
        "digit-text": "hsl(60, 10%, 19%)",
      },
      dark: {
        main: "hsl(222, 26%, 31%)",
        screen: "hsl(224, 36%, 15%)",
        keypad: "hsl(223, 31%, 20%)",
        action: "hsl(225, 21%, 49%)",
        "action-shadow": "hsl(224, 28%, 35%)",
        equal: "hsl(6, 63%, 50%)",
        "equal-shadow": "hsl(6, 70%, 34%)",
        digit: "hsl(30, 25%, 89%)",
        "digit-shadow": "hsl(28, 16%, 65%)",
        "digit-text": "hsl(221, 14%, 31%)",
      },
      purple: {
        main: "hsl(268, 75%, 9%)",
        screen: "hsl(268, 71%, 12%)",
        action: "hsl(281, 89%, 26%)",
        "action-shadow": "hsl(285, 91%, 52%)",
        equal: "hsl(176, 100%, 44%)",
        "equal-shadow": "hsl(177, 92%, 70%)",
        "equal-text": "hsl(198, 20%, 13%)",
        digit: "hsl(268, 47%, 21%)",
        "digit-shadow": "hsl(290, 70%, 36%)",
        "digit-text": "hsl(52, 100%, 62%)",
      },
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    extend: {
      fontFamily: {
        sans: ["League\\ Spartan", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("purple", ".theme-purple &");
    }),
  ],
};
