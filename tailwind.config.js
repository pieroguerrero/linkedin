/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        //Color converter: https://convertingcolors.com/rgb-color-67_56_202.html?search=RGB(67,56,202)
        "color-blue": "#0A66C2",
        "color-text": "rgb(0,0,0,0.6)",
        "color-text-low-emphasis": "#595C5F",
        "color-gray-medium": "#86888A",
        "color-gray-ligth": "#CACCCE",
        "color-button-gray": "#313335",
        "color-button-blue": "#0A66C2",
        "color-button-blue-darker": "#004182",
        "color-text-accent": "#8f5849",
      },
      fontFamily: {
        "source-sans": ["Source Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
