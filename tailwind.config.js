/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const atlasianColors = require('./src/lib/theme/atlassian.json');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Chillax', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      boxShadow: {
        outline: `0 0 0 2px var(--ds-border-focused, ${atlasianColors.blue[300]}) inset`
      },
      width: {
        inherit: 'inherit'
      },
      flex: {
        0: '0 0 auto'
      },
      spacing: {
        '3px': '3px',
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
      teal: atlasianColors.teal,
      purple: atlasianColors.purple
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addVariant, e }) => {
      addVariant('not-last', '&:not(:last-child)');
    })
  ]
};
