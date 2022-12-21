import './CatalogPage.scss';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { RootState } from '../../store/store';
import { baseUrl } from '../../constants';
import { loadProducts } from './catalogPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

export const CatalogPage = () => {
  const catalogPageState = useSelector((state: RootState) => state.catalogPage);
  const dispatch = useDispatch();
  //const [products, setProducts] = useState<ProductResponse[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}/products`)
      .then((response) => response.json())
      .then((data) => dispatch(loadProducts({ products: data })));
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      <div className="product-grid">
        {catalogPageState.products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.count}
            imageSrc={''}
          />
        ))}
      </div>
    </>
  );
};
