module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ['Kaushan Script',]
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00e35a',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
