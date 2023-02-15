/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-syntexia": "#68da23",
        "violet-syntexia": "#412854",
        "blue-syntexia": "#120a3d",
      },
    },
  },
  plugins: [],
}
