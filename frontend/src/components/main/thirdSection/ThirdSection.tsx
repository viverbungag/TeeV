import React from 'react';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import Image from 'next/image';
import Oswald from '@/utilities/fonts/oswald/oswald';

const ThirdSection = () => {
  return (
    <section className="p-8 py-4 bg-primaryT">
      <div className="w-full flex flex-col gap-12">
        <h2
          className={`${IntegralCF.className} text-secondaryT relative sm:text-[3rem] text-[2rem] leading-tight text-center`}
        >
          OUR SERVICES
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:auto-rows-[1fr] md:w-[60rem] md:h-[30rem] self-center gap-4">
          <div className="row-span-1 sm:row-span-2 col-span-2 sm:col-span-2 flex relative items-center bg-white rounded-2xl sm:h-auto">
            <Image
              src="/main/thirdSection/screenPrinting.png"
              width={500}
              height={500}
              alt="Service 1"
              className="w-full h-full rounded"
            />
            <h3
              className={`${Oswald.className} text-xl text-white sm:text-3xl font-bold absolute bottom-3 left-4`}
            >
              SCREEN PRINTING
            </h3>
          </div>
          <div className="row-span-1 col-span-1 relative">
            <Image
              src="/main/thirdSection/directToGramentPrinting.png"
              width={500}
              height={500}
              alt="Service 2"
              className="rounded"
            />
            <h3
              className={`${Oswald.className} text-sm text-white font-bold absolute bottom-2 left-2`}
            >
              DIRECT TO GARMENT PRINTING
            </h3>
          </div>
          <div className="row-span-1 col-span-1 relative">
            <Image
              src="/main/thirdSection/embroidery.png"
              width={500}
              height={500}
              alt="Service 3"
              className="rounded"
            />
            <h3
              className={`${Oswald.className} text-sm text-white font-bold absolute bottom-2 left-2`}
            >
              EMBROIDERY
            </h3>
          </div>
          <div className="row-span-1 col-span-1 relative flex justify-center">
            <Image
              src="/main/thirdSection/customMerch.png"
              width={300}
              height={300}
              alt="Service 4"
              className="rounded"
            />
            <h3
              className={`${Oswald.className} text-sm text-white font-bold absolute bottom-2 left-3`}
            >
              CUSTOM MERCH
            </h3>
          </div>
          <div className="row-span-1 col-span-1 relative flex justify-center">
            <Image
              src="/main/thirdSection/designAndBranding.png"
              width={300}
              height={300}
              alt="Service 4"
              className="rounded"
            />
            <h3
              className={`${Oswald.className} text-white text-sm font-bold absolute bottom-2 left-3`}
            >
              DESIGN AND BRANDING
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
