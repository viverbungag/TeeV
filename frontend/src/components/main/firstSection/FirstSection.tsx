import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import React from 'react';
import Image from 'next/image';
import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import Button from '@/components/shared/Button';

const FirstSection = () => {
  return (
    <section className="h-screen">
      <Image
        src="/main/firstSection/firstSectionBG.png"
        alt="Background Image"
        width={700}
        height={700}
        className="absolute w-screen h-screen"
      />
      <div className="flex flex-col absolute items-center justify-center w-full h-full">
        <div className="grid grid-cols-2 w-[70rem] justify-center">
          <div className="flex flex-col justify-center gap-4 justify-self-center pl-20">
            <h1
              className={`${IntegralCF.className} text-primary relative text-[4rem] leading-tight`}
            >
              DESIGN AND
              <span className="block text-[2rem]">PRINT AGENCY</span>
            </h1>
            <h2 className={`${Coolvetica.className} text-white text-[1.2rem]`}>
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
            className="justify-self-center"
          />
          <div className="flex items-center justify-center col-span-2 mt-8">
            <div className="flex flex-col w-fit items-center justify-center gap-4 bg-[#F7F7F8] rounded-3xl py-8 px-20">
              <h3 className={`${IntegralCF.className} text-black text-center`}>
                COMPANIES THAT WE’VE DONE APPARELS AND DESIGNS
              </h3>
              <div className="flex gap-2 items-center justify-center">
                <Image
                  src="/main/firstSection/springboardLogo.png"
                  alt="Products Image"
                  width={120}
                  height={120}
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
