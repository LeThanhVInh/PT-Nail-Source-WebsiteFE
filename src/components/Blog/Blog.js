'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.scss';

import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const blogItem = [
  {
    id: 1,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty_blog_4-600x350.jpg',
    author: 'admin',
    title: 'Self-Care for Black Journalists',
    description: 'Cauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Praesent nonummy',
  },
  {
    id: 2,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty_blog_3-600x350.jpg',
    author: 'admin',
    title: 'The Black Book Club Takes',
    description: 'Cauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Praesent nonummy',
  },
  {
    id: 3,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty_blog_2-600x350.jpg',
    author: 'admin',
    title: 'These Hand Sanitizers Smell Good',
    description: 'Cauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Praesent nonummy',
  },
  {
    id: 4,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty_blog_5-600x350.jpg',
    author: 'admin',
    title: 'How Moschino’s Movie Got Made',
    description: 'Cauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Praesent nonummy',
  },
];

export default function Blog() {
  const router = useRouter();

  return (
    <div className={cx('wrapper')}>
      <Container fluid="lg">
        <div className={cx('header')}>
          <h2 className={cx('header-title')}>Our Blog</h2>
          <div className={cx('view-more-action')}>
            <button onClick={() => router.push('/blog')}>View All</button>
          </div>
        </div>
        <div className={cx('container')}>
          <Swiper
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={cx('mySwiper')}
          >
            {blogItem.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={cx('blog')}>
                  <div className={cx('blog-wrapper')} key={item.id}>
                    <div className={cx('blog-thumb')}>
                      <img src={item.imgUrl} alt={item.title} />
                    </div>

                    <div className={cx('blog-info')}>
                      <p className={cx('author')}>{item.author}</p>
                      <h3 className={cx('title')}>{item.title}</h3>
                      <div className={cx('description')}>
                        <span>{item.description}</span>
                      </div>
                      <div className={cx('btn-action')}>
                        <button>Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
