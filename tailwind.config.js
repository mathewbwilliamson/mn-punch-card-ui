const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  purge: {
    // enabled: true,
    content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['SonoraMedium', ...defaultTheme.fontFamily.serif],
      },
      margin: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
  plugins: [],
};

/* #ebe714 YELLOW */
/* #ee3b34 RED */
/* #dd2628 Darker Red */
/* #202020 BLACK */
/* #5BF0EB Florescent Blue */
/* #EAFDF8 background white */
