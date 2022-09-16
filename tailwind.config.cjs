/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "open": "open 5s ease-out infinite"

        },
      keyframes: {
        open: {
          "0%, 100%": { transform: "scale(1)"}, 
          "50%": { transform: "scale(1.5)"}, 
        }
      }, 
    },

  },
    fontFamily: {
      'sans': ['ui-sans-serif', 'Arial'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-Fantasy', 'Copperplate'],
      'fantasy':['ui-fantasy', 'copperplate'],
    },
  plugins: [],
}