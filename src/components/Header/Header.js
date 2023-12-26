'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Button, Col, Row } from 'react-bootstrap';

import './styles.scss';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <header className={cx('header')}>
        <Container fluid="md">
          <Navbar expand="md" className={cx('navbar-header')}>
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
                <Nav className={cx('justify-content-center', 'flex-grow-1', 'wrap-nav-header')}>
                  <NavDropdown
                    renderMenuOnMount={true}
                    title={
                      <span className={cx('span-icons', 'list-title')}>
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
                      <span className={cx('span-icons', 'list-title')}>
                        Shop<i className="bi bi-chevron-down"></i>
                      </span>
                    }
                    id="basic-nav-dropdown"
                    className={cx('btn-drop-down')}
                  >
                    <div className={cx('nav-list-parent')}>
                      <Row>
                        <div className={cx('wrap-list')}>
                          <Col lg={6}>
                            <div className={cx('mega-menu')}>
                              <h2 className={cx('title')}>Shop pages</h2>
                              <NavDropdown.Item href="#service1">Shop default</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Shop list</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">My account</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Cart</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Checkout</NavDropdown.Item>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className={cx('mega-menu')}>
                              <h2 className={cx('title')}>Product detail</h2>
                              <NavDropdown.Item href="#service1">Product default</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Product group</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Product extra link</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Product variable</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Special product</NavDropdown.Item>
                            </div>
                          </Col>
                        </div>
                      </Row>
                    </div>
                  </NavDropdown>

                  <NavDropdown
                    renderMenuOnMount={true}
                    title={
                      <span className={cx('span-icons', 'list-title')}>
                        Blog<i className="bi bi-chevron-down"></i>
                      </span>
                    }
                    id="basic-nav-dropdown"
                    className={cx('btn-drop-down')}
                  >
                    <div className={cx('nav-list-parent')}>
                      <Row>
                        <div className={cx('wrap-list')}>
                          <Col lg={6}>
                            <div className={cx('mega-menu')}>
                              <h2 className={cx('title')}>Blog pages</h2>
                              <NavDropdown.Item href="#service1">Blog default</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Blog list 2</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Blog list 3</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Blog Grid</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Blog Grid 2</NavDropdown.Item>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className={cx('mega-menu')}>
                              <h2 className={cx('title')}>Latest posts</h2>
                              <NavDropdown.Item href="#service1">Product default</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Product group</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Product extra link</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Product variable</NavDropdown.Item>
                              <NavDropdown.Item href="#service1">Special product</NavDropdown.Item>
                            </div>
                          </Col>
                        </div>
                      </Row>
                    </div>
                  </NavDropdown>

                  <NavDropdown
                    renderMenuOnMount={true}
                    title={
                      <span className={cx('span-icons', 'list-title')}>
                        Pages<i className="bi bi-chevron-down"></i>
                      </span>
                    }
                    id="basic-nav-dropdown"
                    className={cx('btn-drop-down')}
                  >
                    {/* <NavDropdown
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
                        <Link
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          role="button"
                          tabIndex="0"
                          href="/contact"
                        >
                          Contact 1
                        </Link>
                        <NavDropdown.Item>Contact 2</NavDropdown.Item>
                        <NavDropdown.Item>Contact 3</NavDropdown.Item>
                      </div>
                    </NavDropdown> */}
                    <div className={cx('nav-list-parent')}>
                      <div className={cx('page-list')}>
                        <Link className={cx('page-item', 'dropdown-item')} role="button" tabIndex="0" href="/contact">
                          Contact
                        </Link>
                        <Link className={cx('page-item', 'dropdown-item')} role="button" tabIndex="0" href="/contact">
                          About
                        </Link>
                      </div>
                    </div>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className={cx('header-action')}>
              <div className={cx('account')}>
                <i className={cx('bi bi-person', 'ha-item')}></i>
              </div>
              <div className={cx('search')} onClick={() => setIsSearchOpen((prev) => !prev)}>
                <i className={cx('bi bi-search', 'ha-item')}></i>
              </div>
              {isSearchOpen ? (
                <Form className={cx('d-flex', 'search-form')}>
                  <Form.Control
                    type="search"
                    placeholder="Search..."
                    className={cx('me-2', 'search-input')}
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              ) : null}

              <div className={cx('cart')} onClick={() => router.push('/cart')}>
                <i className={cx('bi bi-cart', 'ha-item')}></i>
                <span className={cx('cart-number')}>5</span>
              </div>
            </div>
          </Navbar>
        </Container>
      </header>
    </>
  );
}
