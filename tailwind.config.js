/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Paths to scan for class names
  darkMode: false, // Set to 'media' or 'class' for enabling dark mode
  theme: {
    extend: {}, // Add customizations here
  },
  variants: {
    extend: {}, // Add variant customizations if needed
  },
  plugins: [], // Add plugins if any
};
