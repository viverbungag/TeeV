'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

import './Carousel.css';

const Carousel = () => {
  return (
    <div className="reviews__carousel">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Image
            src="/main/fifthSection/Elli.png"
            width={100}
            height={100}
            alt="Review Picture"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
