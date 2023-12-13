import { Container } from 'react-bootstrap';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function HeaderContact() {
  return (
    <div className={cx('header-contact')}>
      <Container fluid="md">
        <div className={cx('wrapper')}>
          <div className={cx('contact')}>
            <div className={cx('contact-item')}>
              <i className="bi bi-geo-alt"></i>
              <span>XX DXXXXXXX St, NY 10002, USA</span>
            </div>
            <div className={cx('contact-item')}>
              <i className="bi bi-telephone"></i>
              <span>(+XX) XXXXXXXX</span>
            </div>
          </div>
          <div className={cx('info')}>
            <div className={cx('info-item')}>
              <span>About</span>
            </div>
            <div className={cx('info-item')}>
              <span>Contact</span>
            </div>
            <div className={cx('info-item')}>
              <span>Policy</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeaderContact;
