'use client';

import { Container, Col, Row } from 'react-bootstrap';
import { notFound, useRouter } from 'next/navigation';
import ProductSideBar from '@/components/ProductSideBar/ProductSideBar';

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
                        <div className={cx('bc-author')}>
                          <span>{blog.author}</span>
                        </div>
                        <div className={cx('bc-title')}>
                          <h3>{blog.title}</h3>
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
  );
}
