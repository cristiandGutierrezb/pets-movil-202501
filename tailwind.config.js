/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./modules/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#931E22',
        secondary: {
          DEFAULT: '#ff9c01',
          100: '#ff9001',
          200: '#ff8e01'
        }
      }
    },
  },
  plugins: [],
}

