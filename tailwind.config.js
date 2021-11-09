// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "640px",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
