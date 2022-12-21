import './Carousel.scss';
import { IProduct } from '../../models/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import React, { useState } from 'react';

interface ICarouselProps {
  title: string;
  description?: string;
  products: IProduct[];
}

export const Carousel = (props: ICarouselProps) => {
  const productCardWidth = 390;
  const { title, description, products } = props;
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  const leftButtonClickHandler = () => {
    setCurrentSlideNumber(currentSlideNumber - 1);
  };

  const rightButtonClickHandler = () => {
    setCurrentSlideNumber(currentSlideNumber + 1);
  };

  return (
    <div className="carousel">
      <div className="carousel-left">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <div className="buttons-bar">
          <button
            className="carousel-button left"
            disabled={currentSlideNumber === 0}
            onClick={leftButtonClickHandler}
          >
            left
          </button>
          <button
            className="carousel-button right"
            disabled={currentSlideNumber === products.length - 3}
            onClick={rightButtonClickHandler}
          >
            right
          </button>
        </div>
      </div>
      <div className="carousel-right">
        {products.map((product, index) => (
          <ProductCard
            id={0}
            imageSrc={product.imageSrc}
            price={product.price}
            title={product.title}
            key={product.id}
            marginLeft={index === 0 ? `${-productCardWidth * currentSlideNumber}px` : ''}
          />
        ))}
      </div>
    </div>
  );
};
