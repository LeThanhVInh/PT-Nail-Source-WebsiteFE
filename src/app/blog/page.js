'use client';

import React, { useState } from 'react';

import { Container, Col, Row, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { notFound, useRouter } from 'next/navigation';
import ProductSideBar from '@/components/ProductSideBar/ProductSideBar';
import './styles.scss';
import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
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

const valueSelect = [
  { name: <i className="bi bi-grid-3x2"></i>, value: 'grid' },
  { name: <i class="bi bi-list-task"></i>, value: 'list' },
];

export default function Blog() {
  const router = useRouter();
  const [selectValue, setSelectValue] = useState('grid');

  return (
    <>
      <Breadcrumb title1={'Blog'} title2={'Blog'} path1={'blog'} />
      <div className={cx('wrapper')}>
        <div className={cx('main-content')}>
          <Container fluid="md">
            <Row>
              <Col xs={12} md={9}>
                <div className={cx('content-header')}>
                  <div className={cx('ch-container')}>
                    <h2 className={cx('ch-title')}>Blog</h2>
                    <div className={cx('ch-action')}>
                      <div className={cx('ch-grid')}>
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
                              className={cx('view-type')}
                            >
                              {val.name}
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={3}>
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
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={9}>
                {blogItem.map((blog) => (
                  <div className={cx('blog-content')}>
                    <Row>
                      <Col xs={12} lg={6}>
                        <div className={cx('bc-thumb')}>
                          <img src={blog.imgUrl} alt={blog.title} />
                        </div>
                      </Col>
                      <Col xs={12} lg={6}>
                        <div className={cx('bc-wrapper')}>
                          <div className={cx('bc-title')}>
                            <h3>{blog.title}</h3>
                          </div>
                          <div className={cx('bc-post-meta-data')}>
                            <div className={cx('meta-item')}>
                              <i className="bi bi-person"></i>
                              <span className={cx('author')}>{blog.author}</span>
                              <p className={cx('split')}>|</p>
                            </div>
                            <div className={cx('meta-item')}>
                              <i className="bi bi-calendar-check"></i>
                              <span className={cx('author')}>Feb 23, 2023</span>
                            </div>
                          </div>
                          <div className={cx('bc-desc')}>
                            <p>{blog.description}</p>
                          </div>
                          <div className={cx('bc-btn-read')}>
                            <button onClick={() => router.push(`/blog/${blog.id}`)}>Read More</button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Col>
              <Col xs={12} md={3}>
                <ProductSideBar />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
