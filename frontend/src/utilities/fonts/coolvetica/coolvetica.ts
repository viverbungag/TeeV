import localFont from 'next/font/local';

const Coolvetica = localFont({
  src: [
    {
      path: './Coolvetica Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Coolvetica Compressed.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-coolvetica',
  preload: true,
});

export default Coolvetica;
