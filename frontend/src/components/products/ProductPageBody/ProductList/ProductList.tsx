import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { fetchAllProducts } from '@/utilities/fetch/product';
import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import Oswald from '@/utilities/fonts/oswald/oswald';

const ProductList = async () => {
  const products = await fetchAllProducts();
  const newProducts = products.map((product) => {
    return {
      ...product,
      numberOfColors: 5,
      colors: ['FF3131', 'FF914D', 'FFCD00', '47C363', '00A9E0'],
      imageSrc: '/products/UNISEX RECYCLED BLEND TEE.png',
    };
  });

  return (
    <div
      className={`h-full w-full relative flex flex-col pt-24 pb-4 px-4 gap-8 overflow-y-auto`}
    >
      <div className="flex justify-center flex-wrap gap-4">
        {newProducts.map((product) => (
          <Link href={`/products/view/${product.id}`} key={product.name}>
            <div
              key={product.name}
              className="flex flex-col items-center gap-2 pb-[2rem] hover:bg-background1 hover:cursor-pointer hover:shadow-md hover:rounded-md group"
            >
              <Image
                src={product.imageSrc}
                width={250}
                height={250}
                alt="Product"
                className="w-[10rem] sm:w-[15rem]"
              />
              <div className="text-center">
                <h2 className={`${Oswald.className} text-xs`}>
                  {product.name}
                </h2>
                <p
                  className={`${Coolvetica.className} text-xs text-productPriceColor`}
                >
                  {product.numberOfColors} Colors
                </p>
              </div>
              <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className={`w-4 h-4 rounded`}
                    style={{ backgroundColor: `#${color}` }}
                  />
                ))}

                <div
                  className={`w-4 h-4 flex justify-center items-center rounded text-center text-lg`}
                >
                  +
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
