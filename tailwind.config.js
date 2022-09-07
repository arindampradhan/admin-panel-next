/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const atlasianColors = require('./src/lib/theme/atlassian.json');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Chillax', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      spacing: {
        '2px': '2px',
        '6px': '6px'
      },
      transitionDuration: {
        0: '0ms'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: atlasianColors.primary,
      primarydark: atlasianColors.primaryDark,
      neutral: atlasianColors.neutral,
      lightneutral: atlasianColors.lightNeutral,
      darkneutral: atlasianColors.darkNeutral,
      red: atlasianColors.red,
      green: atlasianColors.green,
      blue: atlasianColors.blue,
      yellow: atlasianColors.yellow,
      teal: atlasianColors.teal
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
