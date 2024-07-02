import ProductList from '@/components/products/ProductPageBody/ProductList/ProductList';
import SideBar from '@/components/products/ProductPageBody/SideBar/SideBar';
import React from 'react';

const ProductPageBody = () => {
  return (
    <div className="flex justify-center bg-background3">
      <div className="sm:pl-16 pl-0 pr-0 sm:pr-4 max-w-[70rem] bg-white w-screen h-screen flex flex-row overflow-hidden">
        <SideBar />
        <ProductList />
      </div>
    </div>
  );
};

export default ProductPageBody;
