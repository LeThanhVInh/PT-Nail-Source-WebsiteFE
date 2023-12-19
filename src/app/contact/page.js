import { Container, Row, Col } from 'react-bootstrap';

import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import GetDiscount from '@/components/GetDiscount/GetDiscount';
const cx = classNames.bind(styles);

export default function Contact() {
  return (
    <>
      <div className={cx('contact-wrapper')}>
        <Container fluid="md">
          <div className={cx('contact')}>
            <div className={cx('title')}>
              <h2>CONTACT US FOR ANY QUESTIONS</h2>
            </div>
            <div className={cx('desc')}>
              <p>
                Aenean sodales dictum augue, in faucibus nisi sollicitudin eu. Nulla semper arcu. Nam molestie sem eu
                quam fermentum a tempus nisi aliquet.
              </p>
            </div>
          </div>
          <div className={cx('details')}>
            <div className={cx('detail-item')}>
              <h3 className={cx('item-title')}>Contact Directly</h3>
              <div className={cx('item-info')}>
                <a>info@example.com</a>
                <a>+ 0123 456 7890</a>
              </div>
            </div>
            <div className={cx('detail-item')}>
              <h3 className={cx('item-title')}>Head Quater</h3>
              <div className={cx('item-info')}>
                <a>Alexandrou Pantou Fragkoudi</a>
                <a>11 17671, Kallithea</a>
              </div>
            </div>
            <div className={cx('detail-item')}>
              <h3 className={cx('item-title')}>Work With Us</h3>
              <div className={cx('item-info')}>
                <a>Send your request to our email:</a>
                <a>info@example.com</a>
              </div>
            </div>
            <div className={cx('detail-item')}>
              <h3 className={cx('item-title')}>Customer Service</h3>
              <div className={cx('item-info')}>
                <a>info@example.com</a>
                <a>+ 0123 456 7890</a>
              </div>
            </div>
            <div className={cx('detail-item')}>
              <h3 className={cx('item-title')}>Media Relations</h3>
              <div className={cx('item-info')}>
                <a>Alexandrou Pantou Fragkoudi</a>
                <a>11 17671, Kallithea</a>
              </div>
            </div>
            <div className={cx('detail-item')}>
              <h3 className={cx('item-title')}>Contact Directly</h3>
              <div className={cx('item-info')}>
                <a>info@example.com</a>
                <a>+ 0123 456 7890</a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={cx('contact-us-wrapper')}>
        <Container fluid>
          <Row>
            <Col xs={12} md={6}>
              <div className={cx('contact-us')}>
                <div className={cx('title')}>
                  <h2>CONTACT US</h2>
                </div>
                <div className={cx('desc')}>
                  <p>
                    Now, as you were able to get a picture of who we are, it is up to you to contact us and lay the
                    foundation for a new and successful business relationship. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className={cx('info')}>
                  <ul className={cx('info-list')}>
                    <li>
                      <i className="bi bi-geo-alt"></i> <span>XX XXXXXXX XX, XX XXXXX, USA</span>
                    </li>
                    <li>
                      <i className="bi bi-telephone"></i> <span>XX XXXXX XXXX XXX</span>
                    </li>
                    <li>
                      <i className="bi bi-envelope"></i> <span>YourEmail@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={cx('form-wrapper')}>
                <Row>
                  <Col sm={6}>
                    <input type="text" placeholder="Enter your name" />
                  </Col>
                  <Col sm={6}>
                    <input type="text" placeholder="Enter your email" />
                  </Col>
                  <Col sm={12}>
                    <textarea name="your-message" cols="40" rows="10" placeholder="Your Message"></textarea>
                  </Col>
                </Row>
                <div className={cx('btn-submit')}>
                  <button>Submit</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <GetDiscount />
    </>
  );
}
