import Button from '@/components/shared/Button';
import CardCarousel from '@/components/shared/CardCarousel/CardCarousel';
import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import React from 'react';

const contents = [
  { imageSrc: '/main/secondSection/carouselPic1.png' },
  { imageSrc: '/main/secondSection/carouselPic1.png' },
  { imageSrc: '/main/secondSection/carouselPic1.png' },
];

const SecondSection = () => {
  return (
    <section className="py-20">
      <div className="flex items-center justify-center">
        <CardCarousel contents={contents} />
        <div className="w-[30rem] flex  gap-4 flex-col justify-center">
          <h2
            className={`${IntegralCF.className} text-secondary relative text-[2.7rem] leading-tight`}
          >
            Logos, DESIGNS, AND MORE
          </h2>
          <p className={`${Coolvetica.className} mt-4`}>
            We make sure that every element in your brand has a purpose. It will
            show what you stand for while differentiating you from anybody else.{' '}
          </p>
          <p className={`${Coolvetica.className}`}>
            These are created only recently, create your designs and have your
            designs placed on the spotlight.
          </p>
          <Button>START A PROJECT</Button>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
