/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{liquid,md,html,yml,erb}", "./frontend/javascript/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

