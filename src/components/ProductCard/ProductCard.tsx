import './ProductCard.scss';

interface IProductCardProps {
  title: string;
  price: number;
  imageSrc: string;
  marginLeft?: string;
}

export const ProductCard = (props: IProductCardProps) => {
  const { imageSrc, price, title, marginLeft } = props;
  return (
    <div className="product-item" style={ marginLeft ? { marginLeft: marginLeft } : {} }>
      <img src={imageSrc} alt="" />
      <span className="title">{title}</span>
      <span className="price">{price} ₽</span>
    </div>
  );
};
