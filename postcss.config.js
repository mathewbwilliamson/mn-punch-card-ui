const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    tailwindcss('./tailwind.js'),
    require('autoprefixer'),
  ],
};
