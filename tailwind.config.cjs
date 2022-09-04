/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
    fontFamily: {
      'sans': ['ui-sans-serif', 'Arial'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-Fantasy', 'Copperplate'],
      'fantasy':['ui-fantasy', 'copperplate'],
    },
  plugins: [],
}