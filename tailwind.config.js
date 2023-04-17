/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryBgDark: "#0f172a",
        primaryLightBlue: "#93c5fd",
        primaryWhite: "#FFFFFF",
        primaryOffWhite: "#F0F0F0",
        primaryBlack: "#000000",
      },
      screens: {
        'sm': '320px',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
