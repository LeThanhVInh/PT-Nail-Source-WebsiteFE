'use client';

import { Container, Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import ProductSideBar from '@/components/ProductSideBar/ProductSideBar';
const cx = classNames.bind(styles);

export default function Blog() {
  const router = useRouter();

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header-title')}>
        <div className={cx('header-details')}>
          <h2 className={cx('title')}>Blog</h2>
          <div className={cx('path-title')}>
            <span className={cx('item-link')} onClick={() => router.push('/')}>
              Home
            </span>
            <i className="bi bi-chevron-right"></i>
            <span className={cx('item-link')}>Blog</span>
          </div>
        </div>
      </div>
      <div className={cx('main-content')}>
        <Container fluid="md">
          <Row>
            <Col xs={12} md={9}>
              <div className={cx('content-header')}>
                <div className={cx('ch-container')}>
                  <h2 className={cx('ch-title')}>Blog</h2>
                </div>
              </div>
              <div className={cx('blog-content')}>
                <Row>
                  <Col xs={12} lg={6}>
                    <div className={cx('bc-thumb')}>
                      <img
                        src="https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty_blog_5-600x350.jpg"
                        alt="test"
                      />
                    </div>
                  </Col>
                  <Col xs={12} lg={6}>
                    <div className={cx('bc-wrapper')}>
                      <div className={cx('bc-author')}>
                        <span>admin</span>
                      </div>
                      <div className={cx('bc-title')}>
                        <h3>How Moschino’s Movie Got Made</h3>
                      </div>
                      <div className={cx('bc-desc')}>
                        <p>Cauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Praesent nonummy</p>
                      </div>
                      <div className={cx('bc-btn-read')}>
                        <button>Read More</button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <ProductSideBar />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
