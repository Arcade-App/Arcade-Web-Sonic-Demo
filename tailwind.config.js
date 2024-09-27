const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'arcade': {
          100: '#E0FCFB',
          200: '#B4F7F5',
          300: '#84F2EF',
          400: '#42EFEC',
          500: '#33CBC9',
          600: '#26A9A8',
          700: '#1A8988',
          800: '#116B6A',
          900: '#094D4D',
        }
      },
      fontFamily: {
        sans: ['var(--font-satoshi)'],
        italic: ['var(--font-satoshi-italic)']
      }

    },
  },
  plugins: [],
};
