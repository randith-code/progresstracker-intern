/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2auto': 'repeat(2, auto)'
      },
      colors: {
        'transparent-black': 'rgba(0, 0, 0, 0.5)'
      },
      width:{
        '25vw': '25vw'
      }
    },
  },
  plugins: [],
}