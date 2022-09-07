/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const { transform } = require("typescript");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbhSans: ["kumbhSans"],
        raleway: ["Raleway"],
      },
    },
    animation: {
      wiggle: "wiggle 2s ease-in-out  infinite",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "scale(100%)" },
        "50%": { transform: "scale(110%)" },
      },
    },

    backgroundImage: {
      "hero-pattern": "url('../assets/bg-image.jpg')",
    },
  },
  plugins: [],
};
