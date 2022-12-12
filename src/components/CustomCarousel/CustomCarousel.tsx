import './CustomCarousel.scss';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import React from 'react';
import Slider, { Settings } from 'react-slick';

interface ICarouselProps {
  children: React.ReactNode;
}

export const CustomCarousel = (props: ICarouselProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="custom-carousel">
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
};
