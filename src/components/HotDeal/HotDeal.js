'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.scss';
import '@/app/import.scss';

import { Row, Col } from 'react-bootstrap';

import styles from './HotDeal.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const dataHotDeal = [
  {
    id: 1,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04/homeimg1.jpg',
    name: 'Ladies skin care',
    price: '20',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
  },
  {
    id: 2,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04/homeimg2.jpg',
    name: 'Cosmetic skin care',
    price: '50',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
  },
  {
    id: 3,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04/homeimg3.jpg',
    name: 'Serum & cream',
    price: '60',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
  },
];

export default function HotDeal() {
  return (
    <div className={cx('wrapper')}>
      <Swiper navigation={true} modules={[Navigation]} className={cx('mySwiper')}>
        {dataHotDeal.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={cx('container')}>
              <div className={cx('img-wrapper')}>
                <img src={item.imgUrl} alt={item.name}></img>
              </div>

              <div className={cx('info-wrapper')}>
                <div className={cx('info-container')}>
                  <div className={cx('title')}>
                    <h2>Deal hot the day</h2>
                  </div>
                  <div className={cx('details')}>
                    <div className={cx('name')}>
                      <h3>{item.name}</h3>
                    </div>
                    <div className={cx('price-wrapper')}>
                      <span>Form</span>
                      <span className={cx('price')}>${item.price}</span>
                    </div>
                  </div>
                  <div className={cx('description')}>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className={cx('widget-image')}>
                  <div className={cx('widget-image-1')}>
                    <img src="https://beautycare.ththeme.net/wp-content/uploads/2022/04/icon-la-2.png" alt="1" />
                  </div>
                  <div className={cx('widget-image-2')}>
                    <img src="https://beautycare.ththeme.net/wp-content/uploads/2022/04/icon-la.png" alt="1" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
