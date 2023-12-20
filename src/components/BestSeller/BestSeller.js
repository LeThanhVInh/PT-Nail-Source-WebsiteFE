'use client';

import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

import styles from './BestSeller.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function BestSeller() {
  const [selectedItem, setSelectedItem] = useState(null);

  const router = useRouter();

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

  return (
    <div className={cx('wrapper')}>
      <Container fluid="md">
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
