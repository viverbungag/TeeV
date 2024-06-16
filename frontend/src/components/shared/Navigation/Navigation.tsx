import React from 'react';
import Image from 'next/image';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import Button from '@/components/shared/Button';
import NavigationToggle from '@/components/shared/Navigation/NavigationToggle/NavigationToggle';

const index = () => {
  return (
    <nav
      className={`${IntegralCF.className} text-white fixed w-screen bg-secondaryT h-fit z-10 p-4`}
    >
      <div className="flex justify-between items-center">
        <Image src="/logo.png" width={150} height={150} alt="logo" />
        {/* <ul className="md:flex gap-8 items-center mr-8 text-[0.9rem] hidden">
          <li>PRODUCTS</li>
          <li>REQUEST QUOTE</li>
          <li>MEET OUR TEAM</li>
          <li>SERVICES</li>
          <li className="text-black">
            <Button>267-538-5331</Button>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default index;
