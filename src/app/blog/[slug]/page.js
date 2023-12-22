'use client';

import { Container, Col, Row } from 'react-bootstrap';
import { notFound, useRouter } from 'next/navigation';

import ProductSideBar from '@/components/ProductSideBar/ProductSideBar';
import Blog from '@/components/Blog/Blog';
import GetDiscount from '@/components/GetDiscount/GetDiscount';
import styles from './BlogDetail.module.scss';
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

export default function BlogDetail({ params }) {
  const router = useRouter();

  const validID = blogItem.some((item) => item.id === Number(params.slug));
  const itemById = blogItem.find((item) => item.id === Number(params.slug));

  if (!validID) {
    notFound();
  }

  return (
    <>
      <div className={cx('header-title')}>
        <div className={cx('header-details')}>
          <h2 className={cx('title')}>Blog</h2>
          <div className={cx('path-title')}>
            <span className={cx('item-link')} onClick={() => router.push('/')}>
              Home
            </span>
            <i className="bi bi-chevron-right"></i>
            <span className={cx('item-link')} onClick={() => router.push('/blog')}>
              Blog
            </span>
            <i className="bi bi-chevron-right"></i>
            <span className={cx('item-link')}>{itemById.title}</span>
          </div>
        </div>
      </div>
      <div className={cx('main-content')}>
        <Container fluid="lg">
          <Row>
            <Col xs={12} lg={9}>
              <div className={cx('blog-thumb')}>
                <img src={itemById.imgUrl} />
              </div>
              <div className={cx('content-header')}>
                <span className={cx('ch-author')}>
                  <i className="bi bi-person"></i> {itemById.author}
                </span>
                <div className={cx('ch-container')}>
                  <h2 className={cx('ch-title')}>{itemById.title}</h2>
                </div>
              </div>
              <div className={cx('blog-content')}>
                <p className={cx('item-text-grey', 'mb-40')}>
                  Cauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Praesent nonummy mi in odio.
                  Etiam imperdiet imperdiet orci. Sed cursus turpis vitae tortor. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Vestibulum purus quam, scelerisque ut, mollis sed,
                  nonummy id, metus. Nulla neque dolor, sagittis eget. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <blockquote className={cx('item-text-main', 'mb-40')}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip. which is the same as saying through shrinking from toil and pain
                  </p>
                </blockquote>
                <p className={cx('item-text-grey', 'mb-40')}>
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                  demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                  the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty
                  through weakness of will, which is the same as saying through shrinking from toil and pain. These
                  cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do what we like best, They cannot foresee the
                  pain and trouble that are bound to ensue and equal blame belongs.
                </p>
              </div>

              <div className={cx('info-author')}>
                <Row>
                  <Col sx={12} lg={3}>
                    <img
                      src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/61034573_1407251922748905_6084097512979824640_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeGa_Uver62zxEyAPlo_2mNI421s6swhDrzjbWzqzCEOvLZNj2aqgOr_nPB7PhH9icpUaqoUHbfe51gnM3sykLkM&_nc_ohc=bljTXSz_lo8AX_hz30v&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCXZmPojmZsq6wGqgFs9cSO36UNika49eyz1IbYs_hZKA&oe=65AB57E4"
                      alt="Avatar Admin"
                      className={cx('avatar')}
                    />
                  </Col>
                  <Col sx={12} lg={9}>
                    <div className={cx('info-details')}>
                      <h3 className={cx('id-name')}>Admin</h3>
                      <p className={cx('id-desc')}>
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
                        and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
                        foresee the pain and trouble that are bound to ensue; and equal blame belongs
                      </p>
                      <ul className={cx('socials-list')}>
                        <li className={cx('socials-item')}>
                          <i className="bi bi-facebook"></i>
                        </li>
                        <li className={cx('socials-item')}>
                          <i className="bi bi-twitter-x"></i>
                        </li>
                        <li className={cx('socials-item')}>
                          <i className="bi bi-linkedin"></i>
                        </li>
                        <li className={cx('socials-item')}>
                          <i className="bi bi-instagram"></i>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
              <Blog />
            </Col>

            <Col xs={12} lg={3}>
              <ProductSideBar />
            </Col>
          </Row>
        </Container>
      </div>
      <GetDiscount />
    </>
  );
}
