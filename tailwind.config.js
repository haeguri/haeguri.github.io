const colors = require("tailwindcss/colors");

// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "640px",
      },
      padding: "1rem",
    },
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        orange: colors.orange,
      },
    },
  },
};
