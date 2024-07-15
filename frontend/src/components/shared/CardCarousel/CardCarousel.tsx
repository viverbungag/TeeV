'use client';

import React from 'react';
import Image from 'next/image';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line no-restricted-imports
import './CardCarousel.css';

type PropTypes = {
  contents: {
    imageSrc: string;
  }[];
};

const CardCarousel: React.FC<PropTypes> = ({ contents }) => {
  return (
    <div className="first-section__carousel carousel-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 120,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={1}
      >
        {contents.map((content, index) => (
          <SwiperSlide key={index}>
            <Image
              src={content.imageSrc}
              width={400}
              height={400}
              alt="Carousel Picture"
              className="rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
