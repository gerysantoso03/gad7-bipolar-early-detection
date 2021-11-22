module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: { max: '540px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
