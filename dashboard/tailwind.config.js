/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./HTML/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}