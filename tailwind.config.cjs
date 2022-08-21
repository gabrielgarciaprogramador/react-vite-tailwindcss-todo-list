/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      red: {
        200: "#f3a1a1",
        DEFAULT: "#ea5959",
        700: "#e32020",
      },
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
