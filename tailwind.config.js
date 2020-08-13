const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // yellow: '#ebe714',
        // lightRed: '#ee3b34',
        // darkRed: '#dd2628',
        // black: '#202020',
        // blue: '#5BF0EB',
        // backgroundWhite: '#EAFDF8',
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
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
