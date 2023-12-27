'use client';
import React, { useState } from 'react';
import { notFound, useRouter } from 'next/navigation';

import { Container, Col, Row, ButtonGroup, ToggleButton, Tab, Tabs } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import ReactImageMagnify from 'react-image-magnify';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css/thumbs';
import './styles.scss';
import styles from './ProductId.module.scss';
import classNames from 'classnames/bind';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
const cx = classNames.bind(styles);

const listItem = [
  {
    id: 1,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-01-380x380.jpg',
    title: 'Body Lotions',
    price: '50',
    categorize: {
      title: 'Lipstick',
      path: 'lipstick',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt condimentum felis, et tempor neque rhoncus ac. Proin elementum, felis id placerat dapibus, purus ipsum lobortis tellus, ut vehicula nisl metus eget arcu.',
  },
  {
    id: 2,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-08-380x380.jpg',
    title: 'Natural Lotion',
    price: '55',
    categorize: {
      title: 'Makeup Bases',
      path: 'makeup-bases',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt condimentum felis, et tempor neque rhoncus ac. Proin elementum, felis id placerat dapibus, purus ipsum lobortis tellus, ut vehicula nisl metus eget arcu.',
  },
  {
    id: 3,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-16-380x380.jpg',
    title: 'Beauty Cream',
    price: '60',
    discount: '15',
    categorize: {
      title: 'Nail Polish',
      path: 'nail-polish',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt condimentum felis, et tempor neque rhoncus ac. Proin elementum, felis id placerat dapibus, purus ipsum lobortis tellus, ut vehicula nisl metus eget arcu.',
  },
  {
    id: 4,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-18-380x380.jpg',
    title: 'Lip Gloss',
    price: '70',
    categorize: {
      title: 'Skin Care',
      path: 'skin-care',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt condimentum felis, et tempor neque rhoncus ac. Proin elementum, felis id placerat dapibus, purus ipsum lobortis tellus, ut vehicula nisl metus eget arcu.',
  },
  {
    id: 5,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-18-380x380.jpg',
    title: 'Lip Gloss',
    price: '66',
    categorize: {
      title: 'Lipstick',
      path: 'lipstick',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt condimentum felis, et tempor neque rhoncus ac. Proin elementum, felis id placerat dapibus, purus ipsum lobortis tellus, ut vehicula nisl metus eget arcu.',
  },
];

const valueSelect = [
  { name: 'S', value: 's' },
  { name: 'M', value: 'm' },
  { name: 'L', value: 'l' },
];

export default function ProductDetails({ params }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectValue, setSelectValue] = useState('s');
  const router = useRouter();

  const validPath = listItem.some((item) => item.categorize.path === params.categorize);
  const validID = listItem.some((item) => item.id === Number(params.id));

  const itemById = listItem.find((item) => item.id === Number(params.id));

  if (!validPath || !validID) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        title1={itemById.title}
        title2={itemById.categorize.title}
        title3={itemById.title}
        path1={itemById.categorize.path}
      />
      <div className={cx('wrapper', 'mb-75')}>
        <Container fluid="md">
          <div className={cx('container-detail')}>
            <Row>
              <Col xs={12} md={5}>
                <div className={cx('product-images')}>
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={cx('mySwiper-detail-parent')}
                  >
                    <SwiperSlide>
                      {/* <img src={itemById.imgUrl} alt={itemById.title} /> */}

                      <div className={cx('imageMagnifyer')}>
                        <ReactImageMagnify
                          {...{
                            smallImage: {
                              alt: 'Wristwatch by Ted Baker London',
                              width: 300,
                              height: 300,
                              src: itemById.imgUrl,
                            },
                            largeImage: {
                              src: itemById.imgUrl,
                              width: 1200,
                              height: 1800,
                            },
                            enlargedImagePosition: 'over',
                          }}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    centeredSlides={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={cx('mySwiper-detail-child')}
                  >
                    <SwiperSlide>
                      <img src={itemById.imgUrl} alt={itemById.title} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Col>
              <Col xs={12} md={7}>
                <div className={cx('info-item')}>
                  <div className={cx('title-item', 'mb-30')}>
                    <h2>{itemById.title}</h2>
                  </div>
                  <div className={cx('price-item', 'mb-30')}>
                    <span>${itemById.price}</span>
                    <del className={cx('ml-10')}>${(itemById.price * 1.1).toFixed(2)}</del>
                    <span className={cx('badge', 'ml-10')}>-10%</span>
                  </div>

                  <div className={cx('size-item', 'mb-30')}>
                    <span className={cx('mr-10')}>Size </span>
                    <div className={cx('btn-value')}>
                      <ButtonGroup>
                        {valueSelect.map((val, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`valueSelect-${idx}`}
                            type="radio"
                            variant={'outline-danger'}
                            name="valueSelect"
                            value={val.value}
                            checked={selectValue === val.value}
                            onChange={(e) => setSelectValue(e.currentTarget.value)}
                            className={cx('toggle-size')}
                          >
                            {val.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    </div>
                  </div>
                  <div className={cx('quantity', 'mb-30')}>
                    <span className={cx('mr-10')}>Quantity </span>
                    <div className={cx('quantity-btn')}>
                      <button>-</button>
                      <span className={cx('quantity-number')}>5</span>
                      <button>+</button>
                    </div>
                  </div>
                  <div className={cx('btn-add', 'mb-30')}>
                    <div className={cx('btn-add-to-cart', 'mr-10')}>
                      <button>Add to cart</button>
                    </div>
                    <div className={cx('btn-add-to-favorite')}>
                      <button>
                        <i className="bi bi-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className={cx('product-detail')}>
            <Tabs defaultActiveKey="description" id="tab-product-detail" className="justify-content-center">
              <Tab eventKey="description" title="Description">
                <p>{itemById.description}</p>
              </Tab>
              <Tab eventKey="reviews" title="Reviews">
                <div className={cx('reviews-content')}>
                  <div className={cx('product-reviews')}>
                    <h2 className={cx('pr-header')}>CUSTOMER REVIEWS</h2>
                    <div className={cx('pr-sumary')}>
                      <span className={cx('pr-content')}>No reviews yet</span>
                      <span className={cx('pr-newreviews')}>Write a review</span>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="comments" title="Comments">
                Comment
              </Tab>
            </Tabs>
          </div>
          <div className={cx('custom-products')}>
            <div className={cx('cp-header')}>
              <h2 className={cx('cp-title')}>Custom Products</h2>
              <a href="" className={cx('cp-more')}>
                View all products <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className={cx('cp-content')}>
              <Swiper
                breakpoints={{
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
                modules={[Navigation]}
                navigation={true}
                className={cx('cp-mySwiper')}
              >
                {listItem.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className={cx('product-wrapper')} key={item.id}>
                      <div className={cx('product-thumb')}>
                        <div className={cx('product-action')}>
                          <a onClick={() => console.log('a')}>
                            <i className="bi bi-cart2"></i>
                          </a>
                          <a>
                            <i className="bi bi-search"></i>
                          </a>
                          <a>
                            <i className="bi bi-arrow-clockwise"></i>
                          </a>
                          <a>
                            <i className="bi bi-heart"></i>
                          </a>
                        </div>
                        {item.discount && (
                          <div className={cx('product-badge')}>
                            <p>-{item.discount}%</p>
                          </div>
                        )}
                        <img
                          src={item.imgUrl}
                          alt={item.title}
                          onClick={() => router.push(`/${item.categorize.path}/${item.id}`)}
                        />
                      </div>

                      <div className={cx('product-info')}>
                        <h3
                          className={cx('product-title')}
                          onClick={() => router.push(`/${item.categorize.path}/${item.id}`)}
                        >
                          {item.title}
                        </h3>
                        <div className={cx('product-price')}>
                          <span>${item.price}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
