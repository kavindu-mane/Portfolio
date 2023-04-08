module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      satisfy: ["Satisfy", "cursive"],
      kurale: ["Kurale", "serif"],
    },
  },
  plugins: [],
};
