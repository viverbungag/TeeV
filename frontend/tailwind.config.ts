import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [daisyui],
  daisyui: {
    darkTheme: 'light', // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
  },
  theme: {
    colors: {
      primaryT: '#FFCD00',
      secondaryT: '#231F20',
      white: '#FFFFFF',
      black: '#000000',
      background1: '#F6F7F9',
      background2: '#242323',
      background3: '#F1F0F5',
      background4: '#F5F5F5',
      background5: '#E7E8E3',
      productPriceColor: '#969292',
      priceMarkupIndicationBackground: '#ADD8E6', //blue
      clothingQuantityFromAndToIndicationBackground: '#CBC3E3', //purple
      numberOfColorsIndicationBackground: '#FFD580', //orange
      priceDataIndicationBackground: '#EDEDED', //gray
      activeNavigationItemBaclground: '#F5C341',
      buttonBackgroundColor: '#F5C341',
      loadingColor: '#F5C341',
      borderColor: '#A9A9A9',
    },
    extend: {
      fontFamily: {
        integralcf: ['var(--font-integralcf)'],
        coolvetica: ['var(--font-coolvetica)'],
        oswald: ['var(--font-oswald)'],
      },
    },
  },
};
export default config;
