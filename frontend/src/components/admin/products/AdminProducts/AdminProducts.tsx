'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import { getUrl, list } from 'aws-amplify/storage';

import { fetchAllProducts } from '@/utilities/fetch/product';
import type { Product } from '@/utilities/types/shared.types';

type ProductWithImage = Product & { image: string };

const AdminProducts = () => {
  const productsQuery = useQuery<Product[]>({
    queryKey: ['products', 'all'],
    queryFn: () => fetchAllProducts(),
  });

  const products = productsQuery.data;

  const [productsWithImages, setProductsWithImages] = React.useState<any>([]);

  useEffect(() => { 
    const fetchImages = async () => {
      if (products) {
        const resultingImages = await Promise.all(
          products.map(async (product) => {
            try {
              const resultList = await list({
                path: `public/album/${product.name}/featured/`,
              });

              const featuredImage = resultList.items.filter((image) => {
                if (image.size && image.size > 0) {
                  return true;
                }
                return false;
              })[0];

              const result = await getUrl({
                path: `${featuredImage.path}`,
              });
              return { ...product, image: result.url.href };
            } catch (error) {
              console.error(error);
            }
          })
        );

        setProductsWithImages(resultingImages);
      }
    };
    void fetchImages();
  }, [products]);

  return (
    <div className="ml-60">
      <Link href="/admin/product/new">
        <button className="btn btn-md">Add a Product</button>
      </Link>
      <div className="mt-10 p-12">
        <table className="table">
          <thead>
            <tr>
              <th>Featured Image</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Style</th>
              <th>Website Visibility</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productsWithImages?.map((product: ProductWithImage) => (
              <tr key={product.id}>
                <td>
                  <Image
                    src={product.image}
                    height={150}
                    width={150}
                    alt="Product Image"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.brand.name}</td>
                <td>{product.style.name}</td>
                <td>
                  {product.isProductVisibleInWebsite ? 'Shown' : 'Hidden'}
                </td>
                <td>
                  <div className="flex items-center gap-4">
                    <Link href={`/admin/products/view/${product.id}`}>
                      <button className="btn btn-sm">View</button>
                    </Link>
                    <Link href={`/admin/products/edit/${product.id}`}>
                      <button className="btn btn-sm">Edit</button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
