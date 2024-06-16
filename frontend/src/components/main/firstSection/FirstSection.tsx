import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import React from 'react';
import Image from 'next/image';
import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import Button from '@/components/shared/Button';
import ResponsiveImage from '@/components/shared/ResponsiveImage';
import CardCarousel from '@/components/shared/CardCarousel/CardCarousel';

const contents = [
  { imageSrc: '/main/secondSection/carouselPic1.png' },
  { imageSrc: '/main/secondSection/carouselPic1.png' },
  { imageSrc: '/main/secondSection/carouselPic1.png' },
];

const FirstSection = () => {
  return (
    <section className="xl:h-screen h-auto relative xl:pt-16 pt-[4.8rem]">
      <div className="h-full">
        <ResponsiveImage
          srcSm="/main/firstSection/firstSectionSmBG.png"
          src2Xl="/main/firstSection/firstSectionBG.png"
          alt="Background Image"
          className="absolute w-screen sm:h-screen"
        />
        <div className="relative h-full xl:pb-16">
          <div className="flex flex-col items-center justify-center w-full xl:h-full">
            <div className="grid xl:grid-cols-2 grid-cols-1 p-8 xl:w-[80rem] justify-center">
              <div className="flex flex-col justify-center xl:items-start items-center gap-4 justify-self-center xl:pl-20 col-span-1">
                <h1
                  className={`${IntegralCF.className} text-primaryT relative sm:text-[4rem] text-[2rem] xl:text-left text-center leading-tight`}
                >
                  DESIGN AND
                  <span className="block sm:text-[2rem] text-[1rem]">
                    PRINT AGENCY
                  </span>
                </h1>
                <h2
                  className={`${Coolvetica.className} text-white text-center xl:text-left sm:text-[1.2rem] xl:max-w-full max-w-[40rem]`}
                >
                  Transform your business into a brand. If you need customized
                  apparel for your business, we’ll lay the foundations to make
                  sure that you have a professional look and feel.
                </h2>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button styleType="primary">SHOP FOR PRODUCTS</Button>
                  <Button styleType="secondary">REQUEST A QUOTE</Button>
                </div>
              </div>
              <div className="col-span-1 mt-8 xl:mt-0">
                <CardCarousel contents={contents} />
              </div>
              <div className="flex items-center justify-center xl:col-span-2 col-span-1 mt-16">
                <div className="flex flex-col w-fit items-center justify-center gap-4 bg-[#F7F7F8] rounded-3xl py-4 px-8 sm:py-8 sm:px-20">
                  <h3
                    className={`${IntegralCF.className} text-black text-center`}
                  >
                    COMPANIES THAT WE’VE DONE APPARELS AND DESIGNS
                  </h3>
                  <div className="xl:flex grid grid-cols-2 gap-2 items-center justify-center">
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
