/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

function withOpacityHslColor(varName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${varName}),${opacityValue})`;
    }
    return `hsl(var(${varName}))`;
  };
}

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
      white: withOpacityHslColor("--clr-white"),
      text: withOpacityHslColor("--clr-text"),
      background: withOpacityHslColor("--clr-background"),
      keypad: withOpacityHslColor("--clr-keypad"),
      screen: withOpacityHslColor("--clr-screen"),
      accent: withOpacityHslColor("--clr-accent"),
      btn: {
        shadow: withOpacityHslColor("--clr-btn-shadow"),
        background: withOpacityHslColor("--clr-btn-background"),
        text: withOpacityHslColor("--clr-btn-text"),
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
  plugins: [],
};
