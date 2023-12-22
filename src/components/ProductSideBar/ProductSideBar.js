'use client';

import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Col, Row } from 'react-bootstrap';
import './styles.scss';
import styles from './ProductSideBar.module.scss';
import classNames from 'classnames/bind';
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

export default function ProductSideBar(props) {
  const router = useRouter();
  const { pathName } = props;

  let filteredCategorize = listItem.filter((element, index, self) => {
    return self.findIndex((e) => e.categorize.title === element.categorize.title) === index;
  });

  return (
    <>
      <div className={cx('content-header', 'overrides')}>
        <div className={cx('input-group')}>
          <input type="text" className="form-control" placeholder="Search" aria-label="Search"></input>
          <div className={cx('input-group-append')}>
            <button className={cx('btn btn-primary')} type="button">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className={cx('product-categorize', 'mb-30')}>
        <h3 className={cx('pc-title')}>PRODUCT CATEGORIES</h3>
        <div className={cx('pc-list-wrapper')}>
          <ul className={cx('pc-list')}>
            {filteredCategorize.map((list) => (
              <li key={list.id} className={cx('pc-item')}>
                <Link
                  href={list.categorize.path}
                  className={cx('pc-item-link', pathName === list.categorize.path ? 'active' : '')}
                >
                  {list.categorize.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cx('featured-products', 'mb-30')}>
        <h3 className={cx('fp-title', 'mb-30')}>Featured Products</h3>
        {listItem.map((item) => (
          <div
            className={cx('fp-item', 'my-5')}
            key={item.id}
            onClick={() => router.push(`/${item.categorize.path}/${item.id}`)}
          >
            <Row>
              <Col xs={4}>
                <div className={cx('fp-item-img')}>
                  <img src={item.imgUrl} alt={item.title} />
                </div>
              </Col>
              <Col xs={8}>
                <div className={cx('fp-item-info')}>
                  <span className={cx('title')}>{item.title}</span>
                  <div className={cx('rating')}></div>
                  <span className={cx('price')}>${Number(item.price).toFixed(2)}</span>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>
      <div className={cx('product-tags')}>
        <h3 className={cx('pt-title', 'mb-30')}>Product Tags</h3>
        <div className={cx('pt-item')}>
          <span className={cx('tag')}>Lorem</span>
          <span className={cx('tag')}>Ipsum</span>
          <span className={cx('tag')}>Neque</span>
          <span className={cx('tag')}>Quisquam</span>
        </div>
      </div>
    </>
  );
}
