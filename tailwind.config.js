/* eslint-disable prettier/prettier */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gold': {
          DEFAULT: '#FFD700',
          '50': '#FFF4B8',
          '100': '#FFF1A3',
          '200': '#FFEA7A',
          '300': '#FFE452',
          '400': '#FFDD29',
          '500': '#FFD700',
          '600': '#C7A800',
          '700': '#8F7800',
          '800': '#574900',
          '900': '#1F1A00'
        },
      },
    },
  },
  plugins: [require("tailwindcss-flip")],
};
