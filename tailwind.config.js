/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
    // forest: "#f4bd55",
        cream: "#F5F1E8",
        gold: "#f4bd55",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
      },
    }
  },
  plugins: [],
}

