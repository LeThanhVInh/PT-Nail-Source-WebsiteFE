'use client';

import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Form } from 'react-bootstrap';
import { notFound } from 'next/navigation';
import Select from 'react-select';
import './styles.scss';
import styles from './Categorize.module.scss';
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

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const customStyles = {
  menu: (provided) => ({ ...provided, zIndex: 10 }),
  option: (base, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...base,
      color: isSelected ? 'var(--white-color)' : 'var(--text-color)',
      '&:hover': {
        color: 'var(--white-color)',
      },
      zIndex: 999,
    };
  },
};

export default function Categorize({ params }) {
  const [typeSort, setTypeSort] = useState('');

  const [isMounted, setIsMounted] = useState(false);

  const pathName = params.categorize.toLowerCase();
  const itemByCategorize = listItem.filter((item) => item.categorize.path === pathName);
  const validPath = listItem.some((item) => item.categorize.path === pathName);

  if (!validPath) {
    notFound();
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header-title')}>
        <div className={cx('header-details')}>
          <h2 className={cx('title')}>{itemByCategorize[0].categorize.title}</h2>
          <div className={cx('path-title')}>
            <a>Home</a>
            <i className="bi bi-chevron-right"></i>
            <a>{itemByCategorize[0].categorize.title}</a>
          </div>
        </div>
      </div>
      <div className={cx('main-content')}>
        <Container fluid="md">
          <Row>
            <Col xs={12} md={9}>
              <div className={cx('content-header')}>
                <div className={cx('ch-container')}>
                  <h2 className={cx('ch-title')}>{itemByCategorize[0].categorize.title}</h2>
                  <div className={cx('ch-action')}>
                    <div className={cx('ch-select')}>
                      <Select
                        instanceId={'select-categorize'}
                        options={options}
                        className={cx('select-categorize')}
                        styles={customStyles}
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: 0,
                          colors: {
                            ...theme.colors,
                            neutral50: 'grey',
                            neutral10: 'red',
                            primary50: 'var(--primary-light)',
                            primary25: 'var(--primary-light)',
                            primary: 'var(--primary-bold)',
                          },
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('main-container')}>
                <div className={cx('product')}>
                  {itemByCategorize.map((item) => (
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
                  ))}
                </div>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className={cx('content-header')}>ss</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
