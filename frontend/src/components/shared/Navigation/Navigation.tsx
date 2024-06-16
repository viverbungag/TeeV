import React from 'react';
import Image from 'next/image';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import Button from '@/components/shared/Button';
import NavigationToggle from '@/components/shared/Navigation/NavigationToggle/NavigationToggle';

const index = () => {
  return (
    <div
      className={`${IntegralCF.className} text-white fixed w-screen bg-secondaryT h-fit z-10 p-4`}
    >
      <div className="flex justify-between items-center">
        <Image src="/logo.png" width={150} height={150} alt="logo" />
      </div>
    </div>
  );
};

export default index;
