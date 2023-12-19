import './styles.scss';
import styles from './GetDiscount.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function GetDiscount() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('bg-container')}></div>
      <div className={cx('info')}>
        <h2 className={cx('title')}>Get Discount Info</h2>
        <p className={cx('desc')}>
          Aenean sodales dictum augue, in faucibus nisi sollicitudin eu. Nulla semper arcu. Nam molestie sem eu quam
          fermentum a tempus nisi aliquet.
        </p>
        <div className={cx('input-group')}>
          <input
            type="text"
            className="form-control"
            placeholder="Your email address"
            aria-label="Your email address"
          ></input>
          <div className={cx('input-group-append')}>
            <button className={cx('btn btn-primary')} type="button">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
