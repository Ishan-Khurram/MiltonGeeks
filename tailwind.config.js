/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bevietnam: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
