import localFont from 'next/font/local';

const IntegralCF = localFont({
  src: [
    {
      path: './Fontspring-DEMO-integralcf-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Fontspring-DEMO-integralcf-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-integralcf',
  preload: true,
});

export default IntegralCF;
