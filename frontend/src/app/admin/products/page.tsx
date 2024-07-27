import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminProducts from '@/components/admin/products/AdminProducts/AdminProducts';

const page = () => {
  return (
    <div className="">
      <div>
        <AdminNavigation page="products" />
        <AdminProducts />
      </div>
    </div>
  );
};

export default page;
