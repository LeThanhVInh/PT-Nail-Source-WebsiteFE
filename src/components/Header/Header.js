'use client';
import Link from 'next/link';

import { Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Button } from 'react-bootstrap';
import React, { useState } from 'react';

import './styles.scss';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Header() {
  return (
    <>
      <header className={cx('header')}>
        <Container>
          <Navbar expand="md">
            <Link href="/" className={cx('navbar-brand', 'header-logo')}>
              Nail Shop
            </Link>
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
                    renderMenuOnMount={true}
                    title={
                      <span className={cx('span-icons')}>
                        Home<i className="bi bi-chevron-down"></i>
                      </span>
                    }
                    id="basic-nav-dropdown"
                    className={cx('btn-drop-down')}
                  >
                    <NavDropdown
                      renderMenuOnMount={true}
                      title={
                        <span className={cx('span-icons')}>
                          Home 1 - 3 <i className="bi bi-chevron-right"></i>
                        </span>
                      }
                      id="basic-nav-dropdown"
                      drop="end"
                      className={cx('nav-list-parent', 'border-0')}
                    >
                      <div className={cx('wrapper-list-child')}>
                        <NavDropdown.Item href="#service1">Home 1</NavDropdown.Item>
                        <NavDropdown.Item href="#service1">Home 2</NavDropdown.Item>
                        <NavDropdown.Item href="#service1">Home 3</NavDropdown.Item>
                      </div>
                    </NavDropdown>

                    <NavDropdown
                      renderMenuOnMount={true}
                      title={
                        <span className={cx('span-icons')}>
                          Home 4 - 6 <i className="bi bi-chevron-right"></i>
                        </span>
                      }
                      id="basic-nav-dropdown"
                      drop="end"
                      className={cx('nav-list-parent')}
                    >
                      <div className={cx('wrapper-list-child')}>
                        <NavDropdown.Item href="#service1">Home 4</NavDropdown.Item>
                        <NavDropdown.Item href="#service1">Home 5</NavDropdown.Item>
                        <NavDropdown.Item href="#service1">Home 6</NavDropdown.Item>
                      </div>
                    </NavDropdown>
                  </NavDropdown>
                  <NavDropdown
                    renderMenuOnMount={true}
                    title={
                      <span className={cx('span-icons')}>
                        Home<i className="bi bi-chevron-down"></i>
                      </span>
                    }
                    id="basic-nav-dropdown"
                    className={cx('btn-drop-down')}
                  >
                    <NavDropdown
                      renderMenuOnMount={true}
                      title={
                        <span className={cx('span-icons')}>
                          Home 1 - 3 <i className="bi bi-chevron-right"></i>
                        </span>
                      }
                      id="basic-nav-dropdown"
                      drop="end"
                      className={cx('nav-list-parent', 'border-0')}
                    >
                      <div className={cx('wrapper-list-child')}>
                        <NavDropdown.Item href="#service1">Home 1</NavDropdown.Item>
                        <NavDropdown.Item href="#service1">Home 2</NavDropdown.Item>
                        <NavDropdown.Item href="#service1">Home 3</NavDropdown.Item>
                      </div>
                    </NavDropdown>

                    <NavDropdown
                      renderMenuOnMount={true}
                      title={
                        <span className={cx('span-icons')}>
                          Home 4 - 6 <i className="bi bi-chevron-right"></i>
                        </span>
                      }
                      id="basic-nav-dropdown"
                      drop="end"
                      className={cx('nav-list-parent')}
                    >
                      <div className={cx('wrapper-list-child')}>
                        <NavDropdown.Item href="#service1">Home 4</NavDropdown.Item>
                        <NavDropdown.Item href="#service1">Home 5</NavDropdown.Item>
                        <NavDropdown.Item href="#service1">Home 6</NavDropdown.Item>
                      </div>
                    </NavDropdown>
                  </NavDropdown>

                  <NavDropdown
                    renderMenuOnMount={true}
                    title={
                      <span className={cx('span-icons')}>
                        Pages<i className="bi bi-chevron-down"></i>
                      </span>
                    }
                    id="basic-nav-dropdown"
                    className={cx('btn-drop-down')}
                  >
                    <NavDropdown
                      renderMenuOnMount={true}
                      title={
                        <span className={cx('span-icons')}>
                          About <i className="bi bi-chevron-right"></i>
                        </span>
                      }
                      id="basic-nav-dropdown"
                      drop="end"
                      className={cx('nav-list-parent', 'border-0')}
                    >
                      <div className={cx('wrapper-list-child')}>
                        <NavDropdown.Item href="#service1">About 1</NavDropdown.Item>
                        <NavDropdown.Item href="#service1">About 2</NavDropdown.Item>
                        <NavDropdown.Item href="#service1">About 3</NavDropdown.Item>
                      </div>
                    </NavDropdown>

                    <NavDropdown
                      renderMenuOnMount={true}
                      title={
                        <span className={cx('span-icons')}>
                          Contact <i className="bi bi-chevron-right"></i>
                        </span>
                      }
                      id="basic-nav-dropdown"
                      drop="end"
                      className={cx('nav-list-parent')}
                    >
                      <div className={cx('wrapper-list-child')}>
                        {/* <NavDropdown.Item> */}
                        <Link
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          role="button"
                          tabIndex="0"
                          href="/contact"
                        >
                          Contact 1
                        </Link>
                        {/* </NavDropdown.Item> */}
                        <NavDropdown.Item>Contact 2</NavDropdown.Item>
                        <NavDropdown.Item>Contact 3</NavDropdown.Item>
                      </div>
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
