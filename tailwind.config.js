/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nuclear-blue': '#0f172a',
        'reactor-green': '#10b981',
        'alert-red': '#ef4444',
      }
    },
  },
  plugins: [],
}