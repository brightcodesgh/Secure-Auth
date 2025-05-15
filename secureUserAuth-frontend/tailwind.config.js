/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#4A4A4A",
        secondary: "#4C3C3C",
        button: "#27548A"
      }
    },
  },
  plugins: [],
}