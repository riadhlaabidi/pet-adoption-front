/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "p-blue-90": "#265C62",
        "p-blue-70": "#337A83",
        "p-blue-50": "#4099A4",
        "p-blue-30": "#4DB1C9",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
