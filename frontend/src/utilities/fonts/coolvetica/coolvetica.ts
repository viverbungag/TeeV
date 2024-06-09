import localFont from 'next/font/local';

const Coolvetica = localFont({
  src: [
    {
      path: './coolvetica rg.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-coolvetica',
  preload: true,
});

export default Coolvetica;
