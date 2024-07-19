import axios from 'axios';

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
