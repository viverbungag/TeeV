import axios from 'axios';

import type { PriceVariablesData } from '@/utilities/types/CalculateTotalProductPriceTypes';
import type { Product } from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchAllProducts = async (): Promise<Product[]> => {
  const response = await axios({
    url: `${backendUrl}/products`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
    },
  });

  const data = response.data;
  return data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await axios({
    url: `${backendUrl}/products/${id}`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
    },
  });

  const data = response.data;
  return data;
};

export const calculateFinalPrice = async (
  priceVariablesData: PriceVariablesData
): Promise<number> => {
  const body = {
    ...priceVariablesData,
    quantityBySizes: JSON.stringify(priceVariablesData.quantityBySizes),
  };

  const response = await axios({
    url: `${backendUrl}/products/calculate-final-price`,
    method: 'POST',
    data: body,
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
    },
  });

  const data = response.data;
  return data;
};
