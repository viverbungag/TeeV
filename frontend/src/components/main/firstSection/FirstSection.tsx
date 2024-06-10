import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import React from 'react';
import Image from 'next/image';
import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import Button from '@/components/shared/Button';
import ResponsiveImage from '@/components/shared/ResponsiveImage';

const FirstSection = () => {
  return (
    <section className="sm:h-screen h-[50rem] sm:pt-0 pt-[4.8rem]">
      <ResponsiveImage
        srcSm="/main/firstSection/firstSectionSmBG.png"
        src2Xl="/main/firstSection/firstSectionBG.png"
        alt="Background Image"
        width={700}
        height={700}
        className="absolute w-screen sm:h-screen"
      />
      <div className="flex flex-col absolute items-center justify-center w-full sm:h-full">
        <div className="grid sm:grid-cols-2 grid-cols-1 p-8 sm:w-[70rem] justify-center">
          <div className="flex flex-col justify-center sm:items-start items-center gap-4 justify-self-center sm:pl-20">
            <h1
              className={`${IntegralCF.className} text-primary relative sm:text-[4rem] text-[2rem] sm:text-left text-center leading-tight`}
            >
              DESIGN AND
              <span className="block sm:text-[2rem] text-[1rem]">
                PRINT AGENCY
              </span>
            </h1>
            <h2
              className={`${Coolvetica.className} text-white text-center sm:text-left sm:text-[1.2rem]`}
            >
              Transform your business into a brand. If you need customized
              apparel for your business, we’ll lay the foundations to make sure
              that you have a professional look and feel.
            </h2>
            <Button>START A PROJECT</Button>
          </div>
          <Image
            src="/main/firstSection/products.png"
            alt="Products Image"
            width={500}
            height={500}
            className="justify-self-center hidden md:block"
          />
          <div className="flex items-center justify-center col-span-2 sm:mt-8 mt-36">
            <div className="flex flex-col w-fit items-center justify-center gap-4 bg-[#F7F7F8] rounded-3xl py-4 px-8 sm:py-8 sm:px-20">
              <h3 className={`${IntegralCF.className} text-black text-center`}>
                COMPANIES THAT WE’VE DONE APPARELS AND DESIGNS
              </h3>
              <div className="sm:flex grid grid-cols-2 gap-2 items-center justify-center">
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
    </section>
  );
};

export default FirstSection;
