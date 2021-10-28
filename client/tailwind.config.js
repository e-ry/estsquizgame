module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        purple: {
          DEFAULT: '#E8EDFA',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        }
      }  
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
