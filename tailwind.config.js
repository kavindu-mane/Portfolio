module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      filter: {
        invert: "var(--tw-invert)",
      },
      spacing: {
        17: "4.25rem",
      },
      keyframes: {
        profileBorder: {
          "0% , 100%": { boxShadow: "0 0 2px 2px #f87171" },
          "5%": { boxShadow: "0 0 5rem -12px #f87171" },

          "10%": { boxShadow: "0 0 2px 2px #fb923c" },
          "15%": { boxShadow: "0 0 5rem -12px #fb923c" },

          "20%": { boxShadow: "0 0 2px 2px #facc15" },
          "25%": { boxShadow: "0 0 5rem -12px #facc15" },

          "30%": { boxShadow: "0 0 2px 2px #2dd4bf" },
          "35%": { boxShadow: "0 0 5rem -12px #2dd4bf" },

          "40%": { boxShadow: "0 0 2px 2px #4ade80" },
          "45%": { boxShadow: "0 0 5rem -12px #4ade80" },

          "50%": { boxShadow: "0 0 2px 2px #2dd4bf" },
          "55%": { boxShadow: "0 0 5rem -12px #2dd4bf" },

          "60%": { boxShadow: "0 0 2px 2px #38bdf8" },
          "65%": { boxShadow: "0 0 5rem -12px #38bdf8" },

          "70%": { boxShadow: "0 0 2px 2px #818cf8" },
          "75%": { boxShadow: "0 0 5rem -12px #818cf8" },

          "80%": { boxShadow: "0 0 2px 2px #c084fc" },
          "85%": { boxShadow: "0 0 5rem -12px #c084fc" },

          "90%": { boxShadow: "0 0 2px 2px #f472b6" },
          "95%": { boxShadow: "0 0 5rem -12px #f472b6" },
        },
      },
      animation: {
        profileBorder: "profileBorder 10s ease-in-out infinite",
      },
    },
    fontFamily: {
      satisfy: ["Satisfy", "cursive"],
      kurale: ["Kurale", "serif"],
      alkatra: ["Alkatra", "cursive"],
    },
  },
  plugins: [],
};
