const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', ...fontFamily.sans],
        poppins: ['Poppins', ...fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
