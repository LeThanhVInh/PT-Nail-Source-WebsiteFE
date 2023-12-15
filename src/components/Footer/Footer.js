import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <Container fluid="lg">
        <Row>
          <Col lg={4}>
            <div className={cx('info', 'p-10')}>
              <div className={cx('logo')}>
                <h2 className={cx('logo-text')}>Nail Shop</h2>
              </div>
              <div className={cx('desc')}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry’s standard dummy text ever since the 1500s
                </p>
              </div>
              <div className={cx('details')}>
                <ul className={cx('details-list')}>
                  <li className={cx('details-item')}>
                    <i className="bi bi-geo-alt"></i> <span>XX XXXXXXX XX, XX XXXXX, USA</span>
                  </li>
                  <li className={cx('details-item')}>
                    <i className="bi bi-telephone"></i> <span>XX XXXXX XXXX XXX</span>
                  </li>
                  <li className={cx('details-item')}>
                    <i className="bi bi-envelope"></i> <span>YourEmail@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            <div className={cx('pages', 'p-10')}>
              <h2 className={cx('title')}>Pages</h2>
              <div className={cx('pages-list')}>
                <ul>
                  <li>About</li>
                  <li>Contact</li>
                  <li>My Account</li>
                  <li>Cart</li>
                  <li>Checkout</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            <div className={cx('pages', 'p-10')}>
              <h2 className={cx('title')}>Services</h2>
              <div className={cx('pages-list')}>
                <ul>
                  <li>Shopping guide</li>
                  <li>Delivery & pick up</li>
                  <li>Refund Policy</li>
                  <li>Documentation</li>
                  <li>Terms & Policy</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={cx('pages', 'p-10')}>
              <h2 className={cx('title')}>Download Our App</h2>
              <div className={cx('pages-list')}>
                <ul>
                  <li>Download our App and get extra 15% Discount on your first Order..!</li>

                  <div>
                    <a>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0495/8021/2387/files/app-store.jpg?v=1603274799"
                        alt="appstore"
                      />
                    </a>
                    <a>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0495/8021/2387/files/google-play.jpg?v=1603274809"
                        alt="chplay"
                      />
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
