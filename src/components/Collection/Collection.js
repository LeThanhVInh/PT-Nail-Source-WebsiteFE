'use client';

import { useState, useRef } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Container } from 'react-bootstrap';
import styles from './Collection.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Collection() {
  const [direction, setDirection] = useState('');

  // const [direction, setDirection] = useState({
  //   div1: '',
  //   div2: '',
  //   div3: '',
  //   div4: '',
  // });

  // const handleMouseMove = (e, index) => {
  //   const rect = e.target.getBoundingClientRect();
  //   const x = e.clientX - rect.left; // Mouse X coordinate relative to the hovered div
  //   const y = e.clientY - rect.top; // Mouse Y coordinate relative to the hovered div

  //   const width = rect.width;
  //   const height = rect.height;

  //   const threshold = 50; // Adjust threshold as needed

  //   if (y < threshold) {
  //     setDirection((prevState) => ({
  //       ...prevState,
  //       ['div' + index]: 'top',
  //     }));
  //   } else if (y > height - threshold) {
  //     setDirection((prevState) => ({
  //       ...prevState,
  //       ['div' + index]: 'bottom',
  //     }));
  //   } else if (x < threshold) {
  //     setDirection((prevState) => ({
  //       ...prevState,
  //       ['div' + index]: 'left',
  //     }));
  //   } else if (x > width - threshold) {
  //     setDirection((prevState) => ({
  //       ...prevState,
  //       ['div' + index]: 'right',
  //     }));
  //   } else {
  //     // setDirection(prevState => ({
  //     //   ...prevState,
  //     //   ['div' + index]: ''
  //     // }));
  //   }
  // };

  const handleMouseMove = (e, index) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X coordinate relative to the hovered div
    const y = e.clientY - rect.top; // Mouse Y coordinate relative to the hovered div

    const width = rect.width;
    const height = rect.height;

    const threshold = 60; // Adjust threshold as needed

    if (y < threshold) {
      setDirection('top');
    } else if (y > height - threshold) {
      setDirection('bottom');
    } else if (x < threshold) {
      setDirection('left');
    } else if (x > width - threshold) {
      setDirection('right');
    } else {
      setDirection(direction);
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setDirection('');
    }, 300);
  };

  return (
    <div className={cx('wrapper')}>
      <Container fluid="md">
        <Row>
          <Col xs={12} md={4} className="mb-3">
            <div
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseLeave={handleMouseLeave}
              className={cx('collection-item')}
            >
              <div className={cx('overlay', 'top')}></div>
              <img src="https://beautycare.ththeme.net/wp-content/uploads/2022/04/bnv1-2.jpg" />
            </div>
          </Col>
          <Col xs={12} md={8} className="mb-3">
            <div onMouseMove={(e) => handleMouseMove(e, 2)} className={cx('collection-item')}>
              <div className={cx('overlay', 'right')}></div>
              <img src="https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty_slider_14-1200x588.jpg" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={8} className="mb-3">
            <div onMouseMove={(e) => handleMouseMove(e, 3)} className={cx('collection-item')}>
              <div className={cx('overlay', 'left')}></div>
              <img src="https://beautycare.ththeme.net/wp-content/uploads/2022/04//beauty_slider_14-1200x588.jpg" />
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <div onMouseMove={(e) => handleMouseMove(e, 4)} className={cx('collection-item')}>
              <div className={cx('overlay', 'bottom')}></div>
              <img src="https://beautycare.ththeme.net/wp-content/uploads/2022/04/bnv1-2.jpg" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
