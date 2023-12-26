'use client';

import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';
import Select from 'react-select';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './CartPage.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function CartPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch('https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div className={cx('cart-table-container')}>
            <Table striped bordered hover className={cx('cart-table')}>
              <thead>
                <tr>
                  <th className={cx('pro-title product-name')} colSpan={2}>
                    Product
                  </th>
                  <th className={cx('pro-price product-price')}>Price</th>
                  <th className={cx('pro-quantity product-quantity')}>Quantity</th>
                  <th className={cx('pro-subtotal product-subtotal')}>Total</th>
                  <th className={cx('pro-remove product-remov')}>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={cx('product-thumbnail', 'pro-thumbnail')}>
                    <a href="/products/droupods-pro-white?variant=40092812705879">
                      <img
                        id="bannerImage-40092812705879"
                        className={cx('lazyautosizes', 'ls-is-cached', 'lazyloaded')}
                        data-src="//drou-electronics-store.myshopify.com/cdn/shop/products/p4_compact.jpg?v=1674275315"
                        data-sizes="auto"
                        alt=""
                        sizes="74px"
                        src="//drou-electronics-store.myshopify.com/cdn/shop/products/p4_compact.jpg?v=1674275315"
                      />
                    </a>
                  </td>
                  <td className={cx('product-name', 'pro-name')}>
                    <a href="/products/droupods-pro-white?variant=40092812705879">DrouPods Pro white</a>
                    <span className={cx('product-variation')}>Navy</span>
                  </td>
                  <td className={cx('product-price', 'pro-price')}>
                    <span className={cx('price', 'amount')}>
                      <span className={cx('money')}>$39.00</span>
                    </span>
                  </td>
                  <td className={cx('product-quantity', 'pro-quantity')}>
                    <div className={cx('pro-qty', 'd-inline-block', 'mx-0', 'pt-0')}>
                      <span className={cx('dec')}>
                        <button>-</button>
                      </span>
                      <input type="text" name="updates[]" defaultValue={1} totalqty={1} />
                      <span className={cx('inc')}>
                        <button>+</button>
                      </span>
                    </div>
                  </td>
                  <td className={cx('total-price', 'pro-subtotal')}>
                    <span className={cx('price')}>
                      <span className={cx('money')}>$39.00</span>
                    </span>
                  </td>
                  <td className={cx('product-remove', 'pro-remove')}>
                    <a href="/cart/change?line=1&quantity=0">
                      <i className="bi bi-x-circle"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className={cx('cart-action')}>
            <button>Update Cart</button>
            <button>Continue Shopping</button>
            <button>Clear Cart</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <div className={cx('pick-delivery-date')}>
            <h3>Pick a delivery date and Time</h3>
            <div className={cx('date-picker-wrapper')}>
              <i className="bi bi-calendar-event"></i>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                wrapperClassName={cx('date-picker')}
                showPopperArrow={false}
              />
            </div>

            <div className={cx('delivery-note')}>
              <input type="text" placeholder="Write delivery time" />
            </div>
            <p className={cx('pick-delivery-decs')}>
              Pick delivery date and time as you choose. Delivery Time takes place between 12PM - 4PM MON-FRI AND
              8AM-11AM SAT.
            </p>
          </div>
          <div className={cx('culculate-shipping')}>
            <h3>Get shipping estimates</h3>
            <div className={cx('countries-select')}>
              <Select
                options={countries}
                value={selectedCountry}
                onChange={(selectedOption) => setSelectedCountry(selectedOption)}
              />
            </div>
            <div className={cx('zip-code')}>
              <input type="text" placeholder="Zip/Postal Code" />
            </div>
            <div className={cx('culculate-action')}>
              <button>Calculate shipping</button>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <div className={cx('cart-total-wrapper')}>
            <h2>Cart Totals</h2>
            <Table bordered className={cx('table-total')}>
              <tbody>
                <tr className={cx('cart-subtotal')}>
                  <th>Subtotal</th>
                  <td className="text-end">
                    <span className={cx('amount')}>
                      <span id="bk-cart-subtotal-price">
                        <span className={cx('money')} data-currency-usd="$2,599.00">
                          $2,599.00
                        </span>
                      </span>
                    </span>
                  </td>
                </tr>
                <tr className={cx('order-total')}>
                  <th>Total</th>
                  <td className="text-end">
                    <strong>
                      <span className={cx('amount')}>
                        <span id="bk-cart-subtotal-price">
                          <span className={cx('money')} data-currency-usd="$2,599.00">
                            $2,599.00
                          </span>
                        </span>
                      </span>
                    </strong>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className={cx('cart-calculation-button')}>
              <div className={cx('check-cart')}>
                <input type="checkbox" id="cart_agree_to_check" value="1" />
                <label for="cart_agree_to_check">I agree with the terms and conditions</label>
              </div>
              <button type="submit" className={cx('checkout-btn')} name="checkout">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
