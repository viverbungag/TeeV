import localFont from 'next/font/local';

const Oswald = localFont({
  src: [
    {
      path: './Oswald-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Oswald-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Oswald-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-oswald',
  preload: true,
});

export default Oswald;
