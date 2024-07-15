import React from 'react';

import ProductPageBody from '@/components/products/ProductPageBody/ProductPageBody';
import NavigationHeader from '@/components/shared/Navigation/NavigationHeader';
import NavigationToggle from '@/components/shared/Navigation/NavigationToggle/NavigationToggle';

const page = () => {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <NavigationHeader />
      <NavigationToggle />
      <ProductPageBody />
    </main>
  );
};

export default page;
