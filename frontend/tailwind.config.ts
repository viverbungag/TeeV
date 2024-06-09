import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  colors: {
    primary: '#FFCD00',
    secondary: '#231F20',
  },
  theme: {
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
