'use client';

import { useState } from 'react';

import { Container } from 'react-bootstrap';
import styles from './BestSeller.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function BestSeller() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const listData = ['All', 'Lipstick', 'Makeup Bases', 'Nail Polish', 'Skin Care'];
  const listItem = [
    {
      id: 1,
      imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-01-380x380.jpg',
      title: 'Body Lotions',
      price: '50',
    },
    {
      id: 2,
      imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-08-380x380.jpg',
      title: 'Natural Lotion',
      price: '55',
    },
    {
      id: 3,
      imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-16-380x380.jpg',
      title: 'Beauty Cream',
      price: '60',
    },
    {
      id: 4,
      imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-18-380x380.jpg',
      title: 'Lip Gloss',
      price: '70',
    },
    {
      id: 5,
      imgUrl: 'https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty-18-380x380.jpg',
      title: 'Lip Glosssss',
      price: '66',
    },
  ];

  return (
    <div className={cx('wrapper')}>
      <Container>
        <div className={cx('header')}>
          <h2 className={cx('header-title')}>Best Seller</h2>
          <div className={cx('categories')}>
            <ul className={cx('list')}>
              {listData.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleItemClick(index)}
                  className={cx('list-item', selectedItem === index ? 'active' : '')}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cx('product')}>
          {listItem.map((item) => (
            <div className={cx('product-wrapper')} key={item.id}>
              <div className={cx('product-thumb')}>
                <div className={cx('product-action')}>
                  <a>
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
                <img src={item.imgUrl} alt={item.title} />
              </div>

              <div className={cx('product-info')}>
                <h3 className={cx('product-title')}>{item.title}</h3>
                <div className={cx('product-price')}>
                  <span>${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
