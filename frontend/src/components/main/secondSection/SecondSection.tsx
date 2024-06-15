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
    <section className="sm:py-20 relative mt-[1rem] sm:mt-0">
      <div className="flex sm:flex-row flex-col items-center justify-center">
        {/* <CardCarousel contents={contents} /> */}
        <div className="sm:w-[30rem] p-4 sm:pt-0 flex gap-4 flex-col justify-center items-center sm:items-start">
          <h2
            className={`${IntegralCF.className} text-secondaryT relative text-[2rem] sm:text-[2.7rem] text-center sm:text-left leading-tight`}
          >
            Logos, DESIGNS, AND MORE
          </h2>
          <p
            className={`${Coolvetica.className} mt-4 px-2 sm:px-0 text-center sm:text-left`}
          >
            We make sure that every element in your brand has a purpose. It will
            show what you stand for while differentiating you from anybody else.{' '}
          </p>
          <p
            className={`${Coolvetica.className} px-2 sm:px-0 text-center sm:text-left`}
          >
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
