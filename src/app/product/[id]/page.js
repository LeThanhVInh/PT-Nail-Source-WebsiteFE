'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Container, Col, Row, ButtonGroup, ToggleButton, Tab, Tabs } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css/thumbs';
import './styles.scss';
import styles from './ProductId.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const listItem = [
  {
    id: 1,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-01-380x380.jpg',
    title: 'Body Lotions',
    price: '50',
    categorize: 'Lipstick',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt condimentum felis, et tempor neque rhoncus ac. Proin elementum, felis id placerat dapibus, purus ipsum lobortis tellus, ut vehicula nisl metus eget arcu.',
  },
  {
    id: 2,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-08-380x380.jpg',
    title: 'Natural Lotion',
    price: '55',
    categorize: 'Makeup Bases',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt condimentum felis, et tempor neque rhoncus ac. Proin elementum, felis id placerat dapibus, purus ipsum lobortis tellus, ut vehicula nisl metus eget arcu.',
  },
  {
    id: 3,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-16-380x380.jpg',
    title: 'Beauty Cream',
    price: '60',
    discount: '15',
    categorize: 'Nail Polish',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt condimentum felis, et tempor neque rhoncus ac. Proin elementum, felis id placerat dapibus, purus ipsum lobortis tellus, ut vehicula nisl metus eget arcu.',
  },
  {
    id: 4,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-18-380x380.jpg',
    title: 'Lip Gloss',
    price: '70',
    categorize: 'Skin Care',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt condimentum felis, et tempor neque rhoncus ac. Proin elementum, felis id placerat dapibus, purus ipsum lobortis tellus, ut vehicula nisl metus eget arcu.',
  },
  {
    id: 5,
    imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-18-380x380.jpg',
    title: 'Lip Gloss',
    price: '66',
    categorize: 'Lipstick',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt condimentum felis, et tempor neque rhoncus ac. Proin elementum, felis id placerat dapibus, purus ipsum lobortis tellus, ut vehicula nisl metus eget arcu.',
  },
];

export default function ProductDetails({ params }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectValue, setSelectValue] = useState('s');
  const router = useRouter();

  const valueSelect = [
    { name: 'S', value: 's' },
    { name: 'M', value: 'm' },
    { name: 'L', value: 'l' },
  ];

  const itemById = listItem.find((item) => item.id == params.id);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header-title')}>
        <div className={cx('header-details')}>
          <h2 className={cx('title')}>{itemById.title}</h2>
          <div className={cx('path-title')}>
            <a>Home</a>
            <i className="bi bi-chevron-right"></i>
            <a>{itemById.categorize}</a>
            <i className="bi bi-chevron-right"></i>
            <a>{itemById.title}</a>
          </div>
        </div>
      </div>
      <Container fluid="md">
        <div className={cx('container-detail', 'mb-30')}>
          <Row>
            <Col xs={12} md={6}>
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
                  <img src={itemById.imgUrl} alt={itemById.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={itemById.imgUrl} alt={itemById.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={itemById.imgUrl} alt={itemById.title} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={cx('mySwiper-detail-child')}
              >
                <SwiperSlide>
                  <img src={itemById.imgUrl} alt={itemById.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={itemById.imgUrl} alt={itemById.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={itemById.imgUrl} alt={itemById.title} />
                </SwiperSlide>
              </Swiper>
            </Col>
            <Col xs={12} md={6}>
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
                  <span className={cx('mr-10')}>Size :</span>
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
                  <span className={cx('mr-10')}>Quantity :</span>
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
                      <img src={item.imgUrl} alt={item.title} onClick={() => router.push(`/product/${item.id}`)} />
                    </div>

                    <div className={cx('product-info')}>
                      <h3 className={cx('product-title')}>{item.title}</h3>
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
  );
}
