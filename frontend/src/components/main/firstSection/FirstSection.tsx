import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

import Button from '@/components/shared/Button';
import ResponsiveImage from '@/components/shared/ResponsiveImage';
import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';

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
        <div className="relative h-full pb-16">
          <div className="flex flex-col items-center justify-center w-full xl:h-full">
            <div className="flex flex-col">
              <div className="flex flex-col xl:flex-row gap-0 xl:gap-12 p-8">
                <div className="max-w-[40rem] flex flex-col xl:items-start items-center gap-4 justify-self-center col-span-1">
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
                    Use custom t-shirts, apparel and merch to ensure that you
                    stay ahead of the competition. Together, we’ll have you
                    wearing garments that has accurate prints, high quality
                    control and a solid professional feel.
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button styleType="primary">SHOP FOR PRODUCTS</Button>
                    <Button styleType="secondary">REQUEST A QUOTE</Button>
                  </div>
                </div>
                <div className="flex justify-center col-span-1 xl:mt-0 mt-8">
                  {/* <CardCarousel contents={contents} /> */}
                  <Image
                    src={'/main/firstSection/carouselPic2.png'}
                    width={300}
                    height={300}
                    alt="Review Picture"
                    className="max-w-[20rem] rounded-md"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center xl:col-span-2 col-span-1 mt-8">
                <div className="flex flex-col sm:max-w-[40rem] md:max-w-[50rem] max-w-[20rem] items-center justify-center gap-4 bg-[#F7F7F8] rounded-lg py-4 px-8">
                  <h3
                    className={`${Coolvetica.className} text-[1.3rem] text-black text-center`}
                  >
                    COMPANIES WE&quot;VE PARTNERED BEFORE
                  </h3>
                  <Marquee>
                    <div className="flex sm:gap-12 gap-8 sm:pl-10 pl-6 items-center justify-center">
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
