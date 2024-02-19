/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      dark: "#20222E",
      gray: "#303740",
      bluegray: "#C1CDD2",
      primary: "#fce44d",
      secondary: "#CDC8E5",
    },
    extend: {
      animation: {
        "bounce-slow": "bounce 2.5s linear infinite",
        "pulse-slow": "pulse 5s linear infinite",
      },
    },
  },
  plugins: [],
};
