/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Define custom colors that work with your theme
        dark: '#1A0F0A',
        soft: '#fffffe',
        accent: '#b98786',
      },
      backgroundColor: {
        'card': 'var(--card-bg)',
      },
      borderColor: {
        'theme': 'var(--border-color)',
      },
      textColor: {
        'theme': 'var(--text-main)',
        'soft': 'var(--text-soft)',
      }
    },
  },
  plugins: [],
}