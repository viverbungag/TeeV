import React from 'react';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import Image from 'next/image';
import Oswald from '@/utilities/fonts/oswald/oswald';

const ThirdSection = () => {
  return (
    <section className="p-8 sm:p-0 sm:py-20 bg-primaryT">
      <div className="w-full flex flex-col gap-12">
        <h2
          className={`${IntegralCF.className} text-secondaryT relative text-[3rem] leading-tight text-center`}
        >
          OUR SERVICES
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:auto-rows-[1fr] sm:w-[60rem] sm:h-[30rem] self-center gap-4">
          <div className="row-span-1 sm:row-span-2 col-span-2 sm:col-span-2 flex relative items-center bg-white rounded-2xl sm:h-auto">
            <Image
              src="/main/secondSection/carouselPic1.png"
              width={500}
              height={500}
              alt="Service 1"
              className="w-full h-full"
            />
            <h3
              className={`${Oswald.className} text-xl sm:text-3xl font-bold absolute bottom-3 left-4`}
            >
              SCREEN PRINTING
            </h3>
          </div>
          <div className="row-span-1 col-span-1 relative bg-white rounded-2xl">
            <Image
              src="/main/secondSection/carouselPic1.png"
              width={500}
              height={500}
              alt="Service 2"
            />
            <h3
              className={`${Oswald.className} text-xs font-bold absolute bottom-2 left-2`}
            >
              DIRECT TO GARMENT PRINTING
            </h3>
          </div>
          <div className="row-span-1 col-span-1 relative bg-white rounded-2xl">
            <Image
              src="/main/secondSection/carouselPic1.png"
              width={500}
              height={500}
              alt="Service 3"
            />
            <h3
              className={`${Oswald.className} text-xs font-bold absolute bottom-2 left-2`}
            >
              EMBROIDERY
            </h3>
          </div>
          <div className="row-span-1 col-span-2 relative flex justify-center bg-white rounded-2xl">
            <Image
              src="/main/secondSection/carouselPic1.png"
              width={300}
              height={300}
              alt="Service 4"
            />
            <h3
              className={`${Oswald.className} text-md font-bold absolute bottom-2 left-3`}
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
