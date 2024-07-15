import React from 'react';
import Image from 'next/image';

import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import Oswald from '@/utilities/fonts/oswald/oswald';
import BasketballClothes from '@/utilities/SVGs/BasketballClothes';
import PaintPalette from '@/utilities/SVGs/PaintPalette';
import ShippingFast from '@/utilities/SVGs/ShippingFast';

const items = [
  {
    icon: <PaintPalette />,
    title: 'FULLY CUSTOM BRANDED MERCH',
    description:
      'We’ll design and print your own unique swag from hoodies, hats or shirts, made from scratch with at our own warehouse.',
  },
  {
    icon: <BasketballClothes />,
    title: 'CUSTOM PRINTING',
    description:
      'We specialize in screen printing, DTG printing or embroidery, and if you want this, we’ve got you covered.',
  },
  {
    icon: <ShippingFast />,
    title: 'FREE SHIPPING',
    description:
      'Whether you’re near our store or far away. As long as you’re within Philadelphia, we’ll cover all the shipping cost for free.',
  },
];

const FourthSection = () => {
  return (
    <section className="w-full justify-center flex p-8 bg-background1">
      <div className="max-w-[50rem] justify-center flex gap-12">
        <Image
          src="/main/fourthSection/personPainting.png"
          width={400}
          height={800}
          alt="Person Painting"
          className="rounded-2xl hidden lg:block"
        />
        <div className="flex flex-col gap-8">
          <h2
            className={`${IntegralCF.className} text-secondaryT relative text-[2rem] font-bold leading-tight text-center`}
          >
            Make it count <span className="block">with us</span>
          </h2>
          <div className="flex flex-col gap-8">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-fit">{item.icon}</div>

                <div className="flex flex-col gap-2 max-w-[20rem]">
                  <h3
                    className={`${Oswald.className} text-secondaryT relative text-[1.3rem] font-bold leading-tight`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`${Coolvetica.className} text-secondaryT relative text-[1.2rem]`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
