'use client';

import React from 'react';
import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import { fetchAllProducts } from '@/utilities/fetch/product';
import type { Product } from '@/utilities/types/shared.types';

const AdminProducts = () => {
  const productsQuery = useQuery<Product[]>({
    queryKey: ['products', 'all'],
    queryFn: () => fetchAllProducts(),
  });

  const products = productsQuery.data;

  return (
    <div className="ml-60">
      <Link href="/admin/product/new">
        <button className="btn btn-md">Add a Product</button>
      </Link>
      <div className="mt-10">
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>
                  <Link href={`/admin/product/${product.id}`}>
                    <button className="btn btn-sm">Edit</button>
                  </Link>
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
