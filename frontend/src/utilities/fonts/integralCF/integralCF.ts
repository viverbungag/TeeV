import localFont from 'next/font/local';

const IntegralCF = localFont({
  src: [
    {
      path: './Integral CF Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Integral CF Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Integral CF Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-integralcf',
  preload: true,
});

export default IntegralCF;
