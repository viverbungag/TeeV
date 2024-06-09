import localFont from 'next/font/local';

const Oswald = localFont({
  src: [
    {
      path: './Oswald-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Oswald-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-oswald',
  preload: true,
});

export default Oswald;
