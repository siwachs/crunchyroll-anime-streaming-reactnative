/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#23252b",
        crunchyrollOrange: "#f47522",
      },
      fontFamily: {
        lato: ["Lato_400Regular", "Roboto", "Helvetica", "Arial", "sans-serif"],
        latoBold: [
          "Lato_700Bold",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        latoExtrabold: [
          "Lato_900Black",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
