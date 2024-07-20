import React from 'react';

import CalculatePriceSection from '@/components/products/view/CalculatePriceSection';
import { fetchProductById } from '@/utilities/fetch/product';

const page = async ({ params }: { params: { id: string } }) => {
  const product = await fetchProductById(params.id);
  return (
    <div>
      <CalculatePriceSection product={product} />
    </div>
  );
};

export default page;
