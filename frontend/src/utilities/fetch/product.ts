/* eslint-disable id-length */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { toast } from 'react-toastify';

import { uploadData } from 'aws-amplify/storage';
import type { AxiosError } from 'axios';
import axios from 'axios';

import type { InputValues } from '@/utilities/types/AdminFormTypes';
import type { PriceVariablesData } from '@/utilities/types/CalculateTotalProductPriceTypes';
import type { ErrorMessage, Product } from '@/utilities/types/shared.types';

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

export const createProduct = async (
  inputValues: InputValues,
  onSuccess: () => void
) => {
  const data = {
    ...inputValues,
    availableSizes: JSON.stringify(inputValues.availableSizes),
    sizesInfo: JSON.stringify(inputValues.sizesInfo),
    pricesPerColorOnWhiteClothes: JSON.stringify(
      inputValues.pricesPerColorOnWhiteClothes
    ),
    pricesPerColorOnColoredClothes: JSON.stringify(
      inputValues.pricesPerColorOnColoredClothes
    ),
    availableClotheSizeParts: JSON.stringify(
      inputValues.availableClotheSizeParts
    ),
  };

  await axios({
    url: `${backendUrl}/products`,
    method: 'POST',
    data: data,
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
    },
  })
    .then(() => {
      onSuccess();
    })
    .catch((error: AxiosError<ErrorMessage>) => {
      if (error.response) {
        throw error.response.data.message;
      }
    });
};

export const uploadProductImages = async (
  productName: string,
  featureImage: File,
  defaultImages: File[]
) => {
  try {
    await uploadData({
      path: `public/album/${productName}/featured/0`,
      data: featureImage,
    }).result;
    defaultImages.forEach(async (image, index) => {
      await uploadData({
        path: `public/album/${productName}/defaults/${index}`,
        data: image,
      }).result;
    });
  } catch (error: any) {
    throw error;
  }
};

export const calculateFinalPrice = async (
  priceVariablesData: PriceVariablesData
): Promise<number> => {
  const body = {
    ...priceVariablesData,
    quantityBySizes: JSON.stringify({
      XS: priceVariablesData.quantityBySizes.XS || 0,
      S: priceVariablesData.quantityBySizes.S || 0,
      M: priceVariablesData.quantityBySizes.M || 0,
      LG: priceVariablesData.quantityBySizes.LG || 0,
      XL: priceVariablesData.quantityBySizes.XL || 0,
      '2XL': priceVariablesData.quantityBySizes['2XL'] || 0,
      '3XL': priceVariablesData.quantityBySizes['3XL'] || 0,
      '4XL': priceVariablesData.quantityBySizes['4XL'] || 0,
      '5XL': priceVariablesData.quantityBySizes['5XL'] || 0,
    }),
  };

  const response = await axios({
    url: `${backendUrl}/products/calculate-final-price`,
    method: 'POST',
    data: body,
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
    },
  }).catch((error: AxiosError<ErrorMessage>) => {
    toast.error(error.response?.data.message);
  });

  const data = response?.data;
  return data;
};
