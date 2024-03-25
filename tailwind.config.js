/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    screens: {
      mobile: '280px',
      lg: '1024px',
    },
    extend: {
      backgroundImage: {
        'house': "url('src/assets/images/house.jpg')",
      },
      fontFamily: {
        'montez': ['Montez', 'cursive'],
      },
    },
  },
  plugins: [],
  jit: true,
}
