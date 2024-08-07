'use client';

import React from 'react';
import Image from 'next/image';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line no-restricted-imports
import './Carousel.css';

import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import Oswald from '@/utilities/fonts/oswald/oswald';
import Account from '@/utilities/SVGs/Account';

type PropTypes = {
  contents: Array<{
    authorDescription: string;
    authorName: string;
    content: string;
    imageSrc: string;
    title: string;
  }>;
};

const Carousel: React.FC<PropTypes> = ({ contents }) => {
  return (
    <div className="reviews__carousel">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {contents.map((content, index) => (
          <SwiperSlide key={content.title + index}>
            <div className="flex lg:flex-row flex-col gap-4">
              <div className="lg:w-[20rem] flex gap-4 relative">
                <p
                  className={`${Oswald.className} text-black absolute lg:-top-6 lg:-inset-8 -top-8 text-[3rem] lg:text-[4rem] italic leading-tight`}
                >
                  &quot;
                </p>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <h3
                      className={`${Coolvetica.className} text-black relative text-[2rem] lg:text-[3rem] text-center lg:text-left italic leading-tight`}
                    >
                      {content.title}
                    </h3>
                    <p
                      className={`${Coolvetica.className} text-black relative text-[1rem] lg:text-[1.2rem] text-center lg:text-left leading-tight`}
                    >
                      {content.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Account width={36} height={36} />
                    <div className="flex flex-col">
                      <p
                        className={`${Oswald.className} text-black font-bold relative text-[0.8rem] leading-tight`}
                      >
                        {content.authorName}
                      </p>
                      <p
                        className={`${Oswald.className} text-black relative text-[0.8rem] leading-tight`}
                      >
                        {content.authorDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={content.imageSrc}
                width={300}
                height={300}
                alt="Review Picture"
                className="w-fit"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
