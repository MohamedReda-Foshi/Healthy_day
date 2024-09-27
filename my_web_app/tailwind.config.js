/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      prompt: {
        '80%': 'w-10/12',
        'blue': '',
        'green': '',
      },
    },
  },
  plugins: [],
}