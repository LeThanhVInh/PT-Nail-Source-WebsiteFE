import { Container } from 'react-bootstrap';
import styles from './Info.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import infoImg from '@/assets/img/info-img.jpg';
const cx = classNames.bind(styles);

export default function Info() {
  return (
    <div className={cx('wrapper')}>
      <Container fluid="md">
        <div className={cx('container')}>
          <div className={cx('content-us-wrapper')}>
            <div className={cx('content-us')}>
              <div className={cx('title')}>
                <h2>Why choose us?</h2>
              </div>
              <div className={cx('description')}>
                <p>
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                  demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                  the pain and trouble natural process. Aenean sodales dictum augue, in faucibus nisi sollicitudin eu
                </p>
              </div>
              <div className={cx('btn-more')}>
                <button>Read more</button>
              </div>
            </div>
          </div>

          <div className={cx('aside-image')}>
            <Image src={infoImg} alt="1" />
          </div>
        </div>
      </Container>
    </div>
  );
}
