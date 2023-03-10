/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        principal: {
          100: "#2e617d",
          200: "#377494",
          300: "#1C3949",
        },
        "principal-white": {
          100: "#F8EDCE",
          DEFAULT: "#F8EDCE",
        },
        "secondary-brown": {
          100: "#C37B2A",
          200: "#a86a23",
          300: "#82511a",
          400: "#5d3a11",
        },
      },
    },
  },
  plugins: [],
};
