const path = require("path");
const colors = require('tailwindcss/colors')
module.exports = {
  plugins: {
    "postcss-import": require("postcss-import"),
    tailwindcss: { config: path.resolve(__dirname, "../tailwind.config.js") },
    autoprefixer: {},
  },
};