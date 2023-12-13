'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from '@/assets/img/slider_1.jpg';
import slider2 from '@/assets/img/slider_2.jpg';
import slider3 from '@/assets/img/slider_3.jpg';

import styles from './SlideShow.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function SlideShow() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={cx('mySwiper')}
      style={{
        '--swiper-pagination-color': 'var(--primary-color)',
      }}
    >
      <SwiperSlide>
        <Image src={slider1} alt="1" priority />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slider2} alt="2" priority />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slider3} alt="3" priority />
      </SwiperSlide>
    </Swiper>
  );
}
