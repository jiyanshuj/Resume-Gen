/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
        rotating: 'rotating 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotating: {
          '0%': { '--a': '0deg' },
          '100%': { '--a': '360deg' },
        },
      }
    },
  },
  plugins: [],
}
