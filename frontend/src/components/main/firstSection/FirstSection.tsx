import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import React from 'react';
import Image from 'next/image';
import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import Button from '@/components/shared/Button';
import ResponsiveImage from '@/components/shared/ResponsiveImage';
import CardCarousel from '@/components/shared/CardCarousel/CardCarousel';
import Oswald from '@/utilities/fonts/oswald/oswald';
import Marquee from 'react-fast-marquee';

const contents = [
  { imageSrc: '/main/firstSection/carouselPic1.png' },
  { imageSrc: '/main/firstSection/carouselPic2.png' },
  { imageSrc: '/main/firstSection/carouselPic3.png' },
];

const FirstSection = () => {
  return (
    <section className="xl:h-screen h-auto relative xl:pt-16 pt-[4.8rem] bg-black">
      <div className="h-full">
        <ResponsiveImage
          srcSm="/main/firstSection/firstSectionSmBG.jpg"
          src2Xl="/main/firstSection/firstSectionBG.jpg"
          alt="Background Image"
          className="absolute w-screen sm:h-screen opacity-20"
        />
        <div className="relative h-full xl:pb-16">
          <div className="flex flex-col items-center justify-center w-full xl:h-full">
            <div className="grid xl:grid-cols-2 grid-cols-1 p-8 max-w-[90rem] justify-center">
              <div className="flex flex-col xl:items-start items-center gap-4 justify-self-center xl:pl-20 col-span-1">
                <h1
                  className={`${IntegralCF.className} text-primaryT relative sm:text-[4rem] text-[2rem] xl:text-left text-center leading-tight`}
                >
                  CUSTOM PRINTED
                  <span className="block sm:text-[2rem] text-[1rem]">
                    T<span className={Coolvetica.className}>-</span>SHIRTS{' '}
                    <span className={Coolvetica.className}>&</span> APPAREL
                  </span>
                </h1>
                <h2
                  className={`${Coolvetica.className} text-white text-center xl:text-left sm:text-[1.2rem] xl:max-w-full max-w-[40rem]`}
                >
                  Use custom t-shirts, apparel and merch to ensure that you stay
                  ahead of the competition. Together, we’ll have you wearing
                  garments that has accurate prints, high quality control and a
                  solid professional feel.
                </h2>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button styleType="primary">SHOP FOR PRODUCTS</Button>
                  <Button styleType="secondary">REQUEST A QUOTE</Button>
                </div>
              </div>
              <div className="col-span-1 mt-8">
                <CardCarousel contents={contents} />
              </div>
              <div className="flex items-center justify-center xl:col-span-2 col-span-1 mt-16">
                <div className="flex flex-col w-[50rem] items-center justify-center gap-4 bg-[#F7F7F8] rounded-lg py-4 px-8">
                  <h3
                    className={`${Coolvetica.className} text-[1.3rem] text-black text-center`}
                  >
                    TRUSTED BY
                  </h3>
                  <Marquee>
                    <div className="flex gap-12 pl-10 items-center justify-center">
                      <Image
                        src="/main/firstSection/springboardLogo.png"
                        alt="Products Image"
                        width={150}
                        height={150}
                      />
                      <Image
                        src="/main/firstSection/chrisChoLogo.png"
                        alt="Products Image"
                        width={120}
                        height={120}
                      />
                      <Image
                        src="/main/firstSection/martinAminiLogo.png"
                        alt="Products Image"
                        width={120}
                        height={120}
                      />
                      <Image
                        src="/main/firstSection/midAtlanticLogo.png"
                        alt="Products Image"
                        width={120}
                        height={120}
                      />
                      <Image
                        src="/main/firstSection/providenceChurchLogo.png"
                        alt="Products Image"
                        width={120}
                        height={120}
                      />
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
