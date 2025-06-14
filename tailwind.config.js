/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grayCustom: "#5f6368",
        babagrey: "#BABABA",
      },
      fontFamily: {
        google: ['"Google Sans"', "Arial", "Helvetica", "sans-serif"],
      },
      keyframes: {
        dropdown: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "dropdown-in": "dropdown 500ms ease-out forwards",
      },
    },
  },
  plugins: [],
};
