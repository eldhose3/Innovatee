/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: "#1e40af"
        },
        orange: {
          500: "#f97316",
          600: "#ea580c",
        },
        gray: {
          900: "#111827",
          700: "#374151",
          600: "#4b5563",
          500: "#6b7280",
        },
        white: "#ffffff",
      },
    },
  },
  plugins: [],
}
