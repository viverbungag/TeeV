import ProductPageBody from '@/components/products/ProductPageBody/ProductPageBody';
import NavigationHeader from '@/components/shared/Navigation/NavigationHeader';
import NavigationToggle from '@/components/shared/Navigation/NavigationToggle/NavigationToggle';
import React from 'react';

const products = [
  {
    imageSrc: '',
  },
];

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
