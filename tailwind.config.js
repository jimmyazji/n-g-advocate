/* eslint-disable prettier/prettier */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#CBA663",
          50: "#F9F5ED",
          100: "#F4ECDD",
          200: "#EADABF",
          300: "#DFC9A0",
          400: "#D5B782",
          500: "#CBA663",
          600: "#B88D3D",
          700: "#8E6D2F",
          800: "#644C21",
          900: "#3A2C13",
        },
      },
      fontFamily:{
        'overlock':['Overlock']
      },
      transitionProperty:{
        'padding':'padding',
        'border':'border-width'
      },
    },
  },
  plugins: [require("tailwindcss-flip")],
};
