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
        'house': "url('./src/assets/background/house.jpg')",
      }
    },
  },
  plugins: [],
  jit: true,
}
