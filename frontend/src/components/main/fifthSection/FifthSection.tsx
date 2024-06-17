import Carousel from '@/components/main/fifthSection/carousel/Carousel';
import Button from '@/components/shared/Button';
import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import Oswald from '@/utilities/fonts/oswald/oswald';
import Image from 'next/image';
import React from 'react';

const FifthSection = () => {
  return (
    <section className="flex flex-col items-center pb-20 pt-12">
      <div className="flex w-fit">
        <div className="flex flex-col gap-4 max-w-[30rem] bg-background2 p-8 rounded-l-2xl">
          <h2
            className={`${Oswald.className} text-white relative text-[2rem] font-bold leading-tight`}
          >
            TURN YOUR COMPANY INTO A BRAND
          </h2>
          <p
            className={`${Coolvetica.className} text-white relative text-[1.3rem] mb-4`}
          >
            Transform your business into a brand seamlessly. From rebranding to
            designing and printing, we've got it covered. Focus on what you do
            best while we handle the heavy lifting.
          </p>
          <Button styleType="primary">TALK TO A DESIGNER</Button>
        </div>
        <Image
          src="/main/fifthSection/genosSteaks.png"
          width={400}
          height={300}
          alt="Geno's Steaks"
          className="rounded-r-2xl"
        />
      </div>
      <div className="flex flex-col mt-12">
        <h2
          className={`${Oswald.className} text-black relative text-[2rem] font-bold leading-tight`}
        >
          CUSTOMER REVIEWS
        </h2>
        <Carousel />
      </div>
    </section>
  );
};

export default FifthSection;
