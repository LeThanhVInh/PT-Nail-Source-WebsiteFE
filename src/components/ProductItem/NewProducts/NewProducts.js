'use client';

import { useState } from 'react';

import { Container } from 'react-bootstrap';
import styles from '../ProductItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function NewProducts() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const listData = ['Trending', 'Featured', 'Makeup On sale', 'Top rate'];
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
      discount: '35',
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
      discount: '90',
    },
  ];

  return (
    <div className={cx('wrapper')}>
      <Container fluid="md">
        <div className={cx('header')}>
          <h2 className={cx('header-title')}>New Products</h2>
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
                {item.discount && (
                  <div className={cx('product-badge')}>
                    <p>-{item.discount}%</p>
                  </div>
                )}
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
