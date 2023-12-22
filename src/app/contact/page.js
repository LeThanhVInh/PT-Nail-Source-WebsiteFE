'use client';

import { usePathname } from 'next/navigation';

import { Container, Row, Col } from 'react-bootstrap';

import { notFound } from 'next/navigation';

import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import GetDiscount from '@/components/GetDiscount/GetDiscount';
const cx = classNames.bind(styles);

export default function Contact() {
  return (
    <>
      <div className={cx('contact-wrapper')}>
        <Container fluid="md">
          <div className={cx('map')}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.973150775589!2d106.68903104591132!3d10.773995997234842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3959037bc1%3A0xd6bbd8e1507b0468!2sB%E1%BA%BFn%20Th%C3%A0nh%2C%20District%201%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1703219095240!5m2!1sen!2s"
              width="100%"
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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
        <Container fluid="md">
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
