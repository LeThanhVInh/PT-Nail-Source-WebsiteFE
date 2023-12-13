'use client';

import { Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Button } from 'react-bootstrap';
import React, { useState } from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Header() {
  const [showNavLv1, setShowNavLv1] = useState(false);
  const [showNavLv2, setShowNavLv2] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <header className={cx('header')}>
        <Container>
          <Navbar expand="md">
            <Navbar.Brand href="#" className={cx('header-logo')}>
              Nail Shop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className={cx(['justify-content-end flex-grow-1 pe-3'])}>
                  <NavDropdown
                    title={
                      <span className={cx('span-icons')}>
                        Home<i className="bi bi-chevron-down"></i>
                      </span>
                    }
                    id="basic-nav-dropdown"
                    className={cx('btn-drop-down')}
                    // onMouseEnter={() => setShowNavLv1(true)}
                    // onMouseLeave={() => setShowNavLv1(false)}
                    // onToggle={() => setIsClicked(!isClicked)}
                    // show={isClicked || showNavLv1}
                  >
                    <NavDropdown
                      title={
                        <span className={cx('span-icons')}>
                          Home 1 - 3 <i className="bi bi-chevron-right"></i>
                        </span>
                      }
                      id="basic-nav-dropdown"
                      drop="end"
                      className={cx('nav-list-parent', 'border-0')}
                      // show={isClicked || showNavLv1}
                      //   onToggle={() => setIsClicked(!isClicked)}
                      //   onMouseEnter={() => setShowNavLv2(true)}
                      //   onMouseLeave={() => setShowNavLv2(false)}
                    >
                      <NavDropdown.Item href="#service1">Home 1</NavDropdown.Item>
                      <NavDropdown.Item href="#service1">Home 2</NavDropdown.Item>
                      <NavDropdown.Item href="#service1">Home 3</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title={
                        <span className={cx('span-icons')}>
                          Home 4 - 6 <i className="bi bi-chevron-right"></i>
                        </span>
                      }
                      id="basic-nav-dropdown"
                      drop="end"
                      className={cx('nav-list-parent')}
                    >
                      <NavDropdown.Item href="#service1">Home 4</NavDropdown.Item>
                      <NavDropdown.Item href="#service1">Home 5</NavDropdown.Item>
                      <NavDropdown.Item href="#service1">Home 6</NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown>
                </Nav>

                <Form className="d-flex">
                  <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        </Container>
      </header>
    </>
  );
}
