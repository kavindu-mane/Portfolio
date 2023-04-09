module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      filter: {
        "invert": "var(--tw-invert)",
      },
      spacing:{
        "17":"4.25rem",
      }
    },
    fontFamily: {
      satisfy: ["Satisfy", "cursive"],
      kurale: ["Kurale", "serif"],
    },
  },
  plugins: [],
};
