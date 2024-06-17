import React from 'react';
import Image from 'next/image';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';

const NavigationHeader = () => {
  return (
    <div
      className={`${IntegralCF.className} text-white fixed w-screen bg-secondaryT h-20 z-10 p-4`}
    >
      <div className="flex h-full justify-between items-center">
        <Image src="/logo.png" width={150} height={150} alt="logo" />
      </div>
    </div>
  );
};

export default NavigationHeader;
