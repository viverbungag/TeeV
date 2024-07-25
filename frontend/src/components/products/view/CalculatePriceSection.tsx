/* eslint-disable id-length */
'use client';

import React from 'react';

import { calculateFinalPrice } from '@/utilities/fetch/product';
import type { ClothingSizes } from '@/utilities/types/AdminFormTypes';
import type { PriceVariablesData } from '@/utilities/types/CalculateTotalProductPriceTypes';
import type { Product } from '@/utilities/types/shared.types';

type PropTypes = {
  product: Product;
};

const CalculatePriceSection: React.FC<PropTypes> = ({ product }) => {
  const availableSizes: Array<{ name: ClothingSizes; value: string }> =
    JSON.parse(product.availableSizes);

  const [priceVariablesData, setPriceVariablesData] =
    React.useState<PriceVariablesData>({
      quantityBySizes: {
        XS: 0,
        S: 0,
        M: 0,
        LG: 0,
        XL: 0,
        '2XL': 0,
        '3XL': 0,
        '4XL': 0,
        '5XL': 0,
      },
      frontNumberOfColors: 1,
      backNumberOfColors: 1,
      productId: product.id,
    });

  const totalQuantity = Object.values(
    priceVariablesData.quantityBySizes
  ).reduce((acc, quantity) => acc + quantity, 0 as number);

  const [finalPrice, setFinalPrice] = React.useState<number>(0);

  const handleQuantityInputOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    size: string
  ) => {
    setPriceVariablesData({
      ...priceVariablesData,
      quantityBySizes: {
        ...priceVariablesData.quantityBySizes,
        [size]: parseInt(event.target.value),
      },
    });
  };

  const handleColorsInputOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const colorType = event.target.name;
    setPriceVariablesData({
      ...priceVariablesData,
      [colorType]: parseInt(event.target.value),
    });
  };

  const handleCalculateFinalPriceButtonOnClick = async () => {
    const finalPriceFetched = await calculateFinalPrice(priceVariablesData);
    setFinalPrice(finalPriceFetched);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-4 mt-4">
        {availableSizes.map((size) => (
          <div className="flex items-center gap-2" key={size.name}>
            <p>{size.name}:</p>
            <input
              className="input input-bordered w-[3rem]"
              type="number"
              onChange={(event) =>
                handleQuantityInputOnChange(event, size.name)
              }
              value={priceVariablesData.quantityBySizes[size.name]}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-12">
        <div className="flex items-center gap-4">
          <p>Number Of Front Colors:</p>
          <input
            className="input input-bordered w-[3rem]"
            name="frontNumberOfColors"
            type="number"
            onChange={handleColorsInputOnChange}
            value={priceVariablesData.frontNumberOfColors}
          />
        </div>
        <div className="flex items-center gap-4">
          <p>Number Of Back Colors:</p>
          <input
            className="input input-bordered w-[3rem]"
            name="backNumberOfColors"
            type="number"
            onChange={handleColorsInputOnChange}
            value={priceVariablesData.backNumberOfColors}
          />
        </div>
      </div>
      <button
        className="btn w-[10rem]"
        onClick={handleCalculateFinalPriceButtonOnClick}
      >
        Calculate Price
      </button>
      <p>Final Price: {Math.round(finalPrice * 100) / 100}</p>
      <p>
        Price per Unit: {Math.round((finalPrice / totalQuantity) * 100) / 100}
      </p>
    </div>
  );
};

export default CalculatePriceSection;
