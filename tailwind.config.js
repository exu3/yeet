module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik, sans-serif",
      },
      colors: {
        blue: "#418CD1",
        lightGray: "#e1e1e1",
        white: "#ffffff",
      },
      backgroundImage: {
        galaxy:
          "url('https://cloud-9egmm6qg6-hack-club-bot.vercel.app/0image.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
