/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        //Color converter: https://convertingcolors.com/rgb-color-67_56_202.html?search=RGB(67,56,202)
        "color-blue": "#0077B5",
        "color-text": "#313335",
        "color-text-low-emphasis": "#595C5F",
        "color-gray-ligth": "#CACCCE",
      },
      fontFamily: {
        "source-sans": ["Source Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
