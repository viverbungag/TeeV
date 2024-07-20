import React from 'react';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import ProductPageBody from '@/components/products/ProductPageBody/ProductPageBody';
import NavigationHeader from '@/components/shared/Navigation/NavigationHeader';
import NavigationToggle from '@/components/shared/Navigation/NavigationToggle/NavigationToggle';
import { fetchAllProducts } from '@/utilities/fetch/product';

const page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: () => fetchAllProducts(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="h-screen w-screen overflow-hidden">
        <NavigationHeader />
        <NavigationToggle />
        <ProductPageBody />
      </main>
    </HydrationBoundary>
  );
};

export default page;
