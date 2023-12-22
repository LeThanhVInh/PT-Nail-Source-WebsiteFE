import { Container, Col, Row, Table } from 'react-bootstrap';

import styles from './CartPage.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function CartPage() {
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
                      <span className={cx('dec')}>-</span>
                      <input type="text" name="updates[]" defaultValue={1} totalqty={1} />
                      <span className={cx('inc')} title="1 Translation missing: en.products.product.in_stock">
                        +
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
                      <i class="bi bi-x-circle"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
