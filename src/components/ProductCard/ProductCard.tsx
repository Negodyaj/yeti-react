import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  imageSrc: string;
  marginLeft?: string;
}

export const ProductCard = (props: IProductCardProps) => {
  const { imageSrc, price, title } = props;
  return (
    <Link to={`/catalog/${props.id}`} className="product-item">
      <img src={imageSrc} alt="" />
      <span className="title">{title}</span>
      <span className="price">{price} ₽</span>
    </Link>
  );
};
