module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "rgb(var(--primary-green)/ <alpha-value>)",
        "secondary-blue": "rgb(var(--secondary-blue)/ <alpha-value>)",
      },
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

        upDown: {
          "0% , 50% , 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-20px)" },
          "75%": { transform: "translateY(20px)" },
        },
        upDownRotate: {
          "0% , 50% , 100%": { transform: "translateY(0) rotate(45deg)" },
          "25%": { transform: "translateY(-20px)" },
          "75%": { transform: "translateY(20px)" },
        },
      },
      animation: {
        profileBorder: "profileBorder 10s ease-in-out infinite",
        upDown: "upDown  5s linear infinite",
        upDownRotate: "upDownRotate 5s linear infinite",
      },
    },
    fontFamily: {
      satisfy: ["Satisfy", "cursive"],
      kurale: ["Kurale", "serif"],
      alkatra: ["Alkatra", "cursive"],
      belanosima: ["Belanosima", "sans-serif"],
      belleza: ["Belleza", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
