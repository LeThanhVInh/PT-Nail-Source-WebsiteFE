import SlideShow from '@/components/SlideShow/SlideShow';

import styles from './page.module.scss';
import classNames from 'classnames/bind';
import Info from '@/components/Info/Info';

import Collection from '@/components/Collection/Collection';

import HotDeal from '@/components/HotDeal/HotDeal';
import Blog from '@/components/Blog/Blog';
import GetDiscount from '@/components/GetDiscount/GetDiscount';
import BestSeller from '@/components/ProductItem/BestSeller/BestSeller';
import NewProducts from '@/components/ProductItem/NewProducts/NewProducts';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <SlideShow />
      <Info />
      <BestSeller />
      <Collection />
      <NewProducts />
      <HotDeal />
      <Blog />
      <GetDiscount />
    </>
  );
}
