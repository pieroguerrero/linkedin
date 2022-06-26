/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        //Color converter: https://convertingcolors.com/rgb-color-67_56_202.html?search=RGB(67,56,202)
        color_primary: "#006BFE",
        color_secondary: "#8BC9C8",
      },
    },
  },
  plugins: [],
};
