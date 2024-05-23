/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    screens: {
      mobile: '350px',
      lg: '1024px',
    },
    extend: {
      backgroundImage: {
        'house': "url('/images/housebg2.jpg')",
      },
      fontFamily: {
        'montez': ['Montez', 'cursive'],
      },
    },
  },
  plugins: [],
  jit: true,
}
