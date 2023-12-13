'use client';

import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Container } from 'react-bootstrap';
import styles from './Collection.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Collection() {
  const [direction, setDirection] = useState('');

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X coordinate relative to the hovered div
    const y = e.clientY - rect.top; // Mouse Y coordinate relative to the hovered div

    const width = rect.width;
    const height = rect.height;

    const threshold = 50; // Adjust threshold as needed

    if (y < threshold) {
      setDirection('top');
    } else if (y > height - threshold) {
      setDirection('bottom');
    } else if (x < threshold) {
      setDirection('left');
    } else if (x > width - threshold) {
      setDirection('right');
    } else {
      setDirection('');
    }
  };

  const handleMouseLeave = () => {
    setDirection('');
  };

  return (
    <div className={cx('wrapper')}>
      <Container fluid="md">
        <Row className="mb-3">
          <Col xs={4}>
            <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={cx('collection-item')}>
              <div className={cx('overlay', 'top')}>
                <p>{direction}</p>
              </div>
              <img src="https://beautycare.ththeme.net/wp-content/uploads/2022/04/bnv1-2.jpg" alt="2" />
            </div>
          </Col>
          <Col xs={8}>
            <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={cx('collection-item')}>
              <div className={cx('overlay', 'right')}></div>

              <img
                src="https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty_slider_14-1200x588.jpg"
                alt="2"
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={8}>
            <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={cx('collection-item')}>
              <div className={cx('overlay', 'left')}></div>

              <img
                src="https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty_slider_14-1200x588.jpg"
                alt="2"
              />
            </div>
          </Col>
          <Col xs={4}>
            <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={cx('collection-item')}>
              <div className={cx('overlay', 'bottom')}></div>
              <img src="https://beautycare.ththeme.net/wp-content/uploads/2022/04/bnv1-2.jpg" alt="2" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
