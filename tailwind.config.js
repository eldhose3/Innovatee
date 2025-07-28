/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A8A",    // Deep blue
          light: "#3B82F6",      // Sky blue
          dark: "#1E40AF",       // Darker blue
        },
        accent: {
          DEFAULT: "#F97316",    // Orange
          light: "#FDBA74",      // Light orange
          dark: "#C2410C",       // Darker orange
        },
        background: {
          DEFAULT: "#F9FAFB",    // Off-white background
        },
      },
      fontFamily: {
        sans: ["Geist", "sans-serif"],
        mono: ["Geist_Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
