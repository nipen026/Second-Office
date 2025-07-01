/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B2447",     // Dark navy
        secondary: "#4B5563",   // Navy gray
        accent: "#2563eb",      // CTA blue
        light: "#f1f5f9",       // Light gray
        muted: "#64748b",       // Gray for subtext
        white: "#ffffff"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Clean, modern font
      },
    },
     container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
}
