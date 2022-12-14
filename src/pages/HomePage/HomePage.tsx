import './HomePage.scss';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Carousel } from '../../components/Carousel/Carousel';
import { Catalog } from './components/Catalog/Catalog';
import { CustomSelect, ISelectItem } from '../../components/CustomSelect/CustomSelect';
import { CustomSwiper } from '../../components/CustomSwiper/CustomSwiper';
import { Hero } from './components/Hero/Hero';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';

const products = [
  {
    id: 1,
    imageSrc: product1,
    title: 'Женская сноубордическая куртка Sula',
    price: 17490,
  },
  {
    id: 2,
    imageSrc: product2,
    title: 'Мужская сноубордическая куртка Sula',
    price: 19490,
  },
  {
    id: 3,
    imageSrc: product3,
    title: 'Женская сноубордическая куртка Sula',
    price: 15220,
  },
  {
    id: 4,
    imageSrc: product2,
    title: 'Мужская сноубордическая куртка Sula',
    price: 13320,
  },
  {
    id: 5,
    imageSrc: product1,
    title: 'Женская сноубордическая куртка Sula',
    price: 16490,
  },
  {
    id: 6,
    imageSrc: product2,
    title: 'Мужская сноубордическая куртка Sula',
    price: 17490,
  },
  {
    id: 7,
    imageSrc: product3,
    title: 'Женская сноубордическая куртка Sula',
    price: 12490,
  },
  {
    id: 8,
    imageSrc: product2,
    title: 'Мужская сноубордическая куртка Sula',
    price: 15490,
  },
];

export const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState<ISelectItem | null>();

  const options: ISelectItem[] = [
    { value: 1, label: 'Chocolate' },
    { value: 2, label: 'Strawberry' },
    { value: 3, label: 'Vanilla' },
  ];

  const onSelectChange = (value: ISelectItem | null) => {
    setSelectedOption(value);
  };

  return (
    <>
      <div className="swiper-wrapper container">
        <CustomSwiper slidesPerView={3}>
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard imageSrc={product.imageSrc} price={product.price} title={product.title} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
      <div className="select-wrapper">
        <CustomSelect options={options} onChange={onSelectChange} />
      </div>
      {selectedOption?.value}
      {selectedOption?.label}
      <Hero />
      <AboutUs />
      <Catalog />
      <div className="animated-line desktop-only">
        <div className="yeti-line">
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
        </div>
        <div className="yeti-line rotated-line">
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
        </div>
      </div>
      <Carousel
        products={products}
        title="ХИТЫ ПРОДАЖ"
        description="Наилучшее качество материалов, новинки товаров и последние тренды разных стран"
      />

      <div className="musical-player container"></div>
      <div className="popular-brands narrow-container"></div>
      <div className="animated-line desktop-only">
        <div id="first-line">
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
        </div>
        <div id="second-line" className="rotated-line">
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
          <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span> <span>YETI</span>{' '}
        </div>
      </div>
      <div className="nice-photo"></div>
      <div className="socials narrow-container"></div>
    </>
  );
};
