/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif']
    },
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
        'size-400': '400% 400%'
      }
    }
  },
  plugins: []
};
