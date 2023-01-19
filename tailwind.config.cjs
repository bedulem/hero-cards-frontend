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
      },
    },
  },
  plugins: [],
};
