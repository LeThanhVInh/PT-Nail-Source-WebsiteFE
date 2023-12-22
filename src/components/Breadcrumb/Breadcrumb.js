import { useRouter } from 'next/navigation';

import styles from './Breadcrumb.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Breadcrumb(props) {
  const { title1, title2, title3, path1 } = props;
  const router = useRouter();

  return (
    <div className={cx('bread-crumb-wrapper')}>
      <div className={cx('bread-crumb-details')}>
        <h2 className={cx('title')}>{title1}</h2>
        <div className={cx('path-title')}>
          <span className={cx('item-link')} onClick={() => router.push('/')}>
            Home
          </span>
          <i className="bi bi-chevron-right"></i>
          <span className={cx('item-link')} onClick={() => router.push(`/${path1}`)}>
            {title2}
          </span>
          {title3 ? (
            <>
              <i className="bi bi-chevron-right"></i>
              <span className={cx('item-link')}>{title3}</span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
