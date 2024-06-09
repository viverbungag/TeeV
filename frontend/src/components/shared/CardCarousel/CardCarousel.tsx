'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Scrollbar } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './CardCarousel.css';

type PropTypes = {
  contents: {
    imageSrc: string;
  }[];
};

const CardCarousel: React.FC<PropTypes> = ({ contents }) => {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards, Pagination]}
      className="mySwiper"
      pagination={true}
    >
      {contents.map((content, index) => (
        <SwiperSlide key={index}>
          <Image
            src={content.imageSrc}
            width={500}
            height={500}
            alt="Clothing Picture"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
