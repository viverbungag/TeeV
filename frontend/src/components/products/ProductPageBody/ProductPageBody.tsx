import ProductList from '@/components/products/ProductPageBody/ProductList/ProductList';
import SideBar from '@/components/products/ProductPageBody/SideBar/SideBar';
import React from 'react';

const ProductPageBody = () => {
  return (
    <div className="flex justify-center bg-background3">
      <div className="pl-16 pr-4 max-w-[70rem] bg-white w-screen h-screen flex flex-row overflow-hidden">
        <SideBar />
        <ProductList />
      </div>
    </div>
  );
};

export default ProductPageBody;
