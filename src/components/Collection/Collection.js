'use client';

import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Container } from 'react-bootstrap';
import styles from './Collection.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Collection() {
  const [direction, setDirection] = useState({
    div1: '',
    div2: '',
    div3: '',
    div4: '',
  });

  const handleMouseMove = (e, index) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X coordinate relative to the hovered div
    const y = e.clientY - rect.top; // Mouse Y coordinate relative to the hovered div

    const width = rect.width;
    const height = rect.height;

    const threshold = 50; // Adjust threshold as needed

    if (y < threshold) {
      setDirection(prevState => ({
        ...prevState,
        ['div' + index]: 'top'
      }));
    } else if (y > height - threshold) {
      setDirection(prevState => ({
        ...prevState,
        ['div' + index]: 'bottom'
      }));
    } else if (x < threshold) {
      setDirection(prevState => ({
        ...prevState,
        ['div' + index]: 'left'
      }));
    } else if (x > width - threshold) {
      setDirection(prevState => ({
        ...prevState,
        ['div' + index]: 'right'
      }));
    } else {
      // setDirection(prevState => ({
      //   ...prevState,
      //   ['div' + index]: ''
      // }));
    }
  };

  return (
    <div className={cx('wrapper')}>
      <Container fluid="md">
        <Row className="mb-3">
          <Col xs={4}>
            <div onMouseMove={(e) => handleMouseMove(e, 1)} className={cx('collection-item')}>
              <div className={cx('overlay', direction.div1)}></div>
              <img src="https://beautycare.ththeme.net/wp-content/uploads/2022/04/bnv1-2.jpg" />
            </div>
          </Col>
          <Col xs={8}>
            <div onMouseMove={(e) => handleMouseMove(e, 2)} className={cx('collection-item')}>
              <div className={cx('overlay', direction.div2)}></div>
              <img src="https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty_slider_14-1200x588.jpg"
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={8}>
            <div onMouseMove={(e) => handleMouseMove(e, 3)} className={cx('collection-item')}>
              <div className={cx('overlay', direction.div3)}></div>
              <img src="https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty_slider_14-1200x588.jpg"
              />
            </div>
          </Col>
          <Col xs={4}>
            <div onMouseMove={(e) => handleMouseMove(e, 4)} className={cx('collection-item')}>
              <div className={cx('overlay', direction.div4)}></div>
              <img src="https://beautycare.ththeme.net/wp-content/uploads/2022/04/bnv1-2.jpg" />
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}
