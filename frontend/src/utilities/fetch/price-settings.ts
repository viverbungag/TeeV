import axios from 'axios';

import type { PriceSettings } from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchPriceSettings = async (): Promise<PriceSettings> => {
  const response = await axios({
    url: `${backendUrl}/price-settings`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
    },
  });

  const tempData = response.data;
  const data = {
    adminFees: tempData.adminFees,
    backPrintPrice: JSON.parse(tempData.backPrintPrice),
    frontPrintPrice: JSON.parse(tempData.frontPrintPrice),
    maximumQuantity: tempData.maximumQuantity,
    minimumQuantity: tempData.minimumQuantity,
    numberOfHoodiePerPackage: tempData.numberOfHoodiePerPackage,
    numberOfTShirtPerPackage: tempData.numberOfTShirtPerPackage,
    setupChargePerNumberOfColors: tempData.setupChargePerNumberOfColors,
    pricePerTShirtPackage: tempData.pricePerTShirtPackage,
    pricePerHoodiePackage: tempData.pricePerHoodiePackage,
  };
  return data;
};

export const updatePriceSettings = async (data: PriceSettings) => {
  const requestBody = {
    adminFees: data.adminFees,
    backPrintPrice: JSON.stringify(data.backPrintPrice),
    frontPrintPrice: JSON.stringify(data.frontPrintPrice),
    maximumQuantity: data.maximumQuantity,
    minimumQuantity: data.minimumQuantity,
    numberOfHoodiePerPackage: data.numberOfHoodiePerPackage,
    numberOfTShirtPerPackage: data.numberOfTShirtPerPackage,
    setupChargePerNumberOfColors: data.setupChargePerNumberOfColors,
  };

  await axios({
    url: `${backendUrl}/price-settings`,
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
    },
    data: requestBody,
  });
};
