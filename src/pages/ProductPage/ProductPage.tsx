import './ProductPage.scss';
import { CustomSelect } from '../../components/CustomSelect/CustomSelect';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { baseUrl } from '../../constants';

export const ProductPage = () => {
  const urlParams = useParams<{ productId: string }>();
  const productId = urlParams.productId;

  useEffect(() => {
    fetch(`${baseUrl}/products/${productId}`)
      .then((response) => response.json())
      .then((data) => console.log(data.name));
  }, [productId]);

  const availableSizes = [
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'xl', label: 'XL' },
  ];

  const availableShops = [
    { value: '1', label: 'Shop 1' },
    { value: '2', label: 'Shop 2' },
    { value: '3', label: 'Shop 3' },
  ];

  return (
    <div className="product">
      <div className="available-sizes">
        <CustomSelect options={availableSizes} label="Sizes:" />
      </div>
      <div className="available-shops">
        <CustomSelect options={availableShops} label="Point of sale:" />
      </div>
    </div>
  );
};
