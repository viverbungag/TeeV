import axios from 'axios';

import type { Category } from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axios({
    url: `${backendUrl}/categories`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
    },
  });

  const data = response.data;
  return data;
};
