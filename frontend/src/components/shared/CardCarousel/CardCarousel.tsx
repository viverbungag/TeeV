'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Scrollbar } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './CardCarousel.css';

type PropTypes = {
  contents: {
    imageSrc: string;
  }[];
};

const CardCarousel: React.FC<PropTypes> = ({ contents }) => {
  return (
    <div className="carousel-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
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
              width={500}
              height={500}
              alt="Clothing Picture"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
