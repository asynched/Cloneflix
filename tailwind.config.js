module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backdrop: '#111',
        'backdrop-light': '#333',
        'theme-red': '#e50914',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
