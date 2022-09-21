/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: ["Raleway", "sans-serif"] },
    extend: {
      colors: {
        primary: "#100e1d",
        secondary: "#1e213a",
        gray: {
          150: "#E7E7EB",
          250: "#A09FB1",
          350: "#88869D",
        },
        "gray-button": "#6d6f79",
      },
    },
  },
  plugins: [],
};
