/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1A0F0A",
        accent: "#B98786",
        soft: "#f5f5f5",
        card: "#FFFFFF"
      },
      borderRadius: {
        xl: "8px"
      }
    },
  },
  plugins: [],
}

