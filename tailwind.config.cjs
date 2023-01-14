/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      colors: {
        bgWhite: "hsl(0, 0%, 100%)",
        bgLightGray: "hsl(212, 45%, 89%)",
        bgGrayishBlue: "hsl(220, 15%, 55%)",
        bgDarkBlue: "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
