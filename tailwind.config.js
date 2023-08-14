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
