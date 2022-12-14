import React from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';

interface ICustomSwiperProps {
  slidesPerView: number;
  children: React.ReactNode;
}

export const CustomSwiper = (props: ICustomSwiperProps) => {
  const { slidesPerView } = props;
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {props.children}
    </Swiper>
  );
};
