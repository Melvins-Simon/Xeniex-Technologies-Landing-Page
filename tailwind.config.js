/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens:{
        "sm":"450px"
      }
    },
  },
  plugins: [],
}

