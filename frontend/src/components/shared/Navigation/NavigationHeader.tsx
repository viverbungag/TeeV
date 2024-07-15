import React from 'react';
import Image from 'next/image';

import Button from '@/components/shared/Button';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import Oswald from '@/utilities/fonts/oswald/oswald';
import Call from '@/utilities/SVGs/Call';
import Star from '@/utilities/SVGs/Star';

const NavigationHeader = () => {
  return (
    <div
      className={`${IntegralCF.className} text-white fixed w-screen bg-secondaryT h-20 z-10 p-4`}
    >
      <div className="flex h-full justify-center items-center">
        <div className="w-[90rem] flex gap-8">
          <Image src="/logo.png" width={150} height={150} alt="logo" />
          <div className="items-center gap-2 hidden sm:flex">
            <div className="flex items-center">
              <Star width={20} height={20} />
              <Star width={20} height={20} />
              <Star width={20} height={20} />
              <Star width={20} height={20} />
              <Star width={20} height={20} />
            </div>
            <p className={`${Oswald.className}`}>
              4.9/5 Customer Satisfaction from 114 Google Reviews
            </p>
          </div>
        </div>
        <div className="absolute text-secondaryT right-32 sm:block hidden">
          <Button styleType="primary">
            <div className="flex items-center gap-2">
              <Call width={20} height={20} />
              267-538-5331
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
