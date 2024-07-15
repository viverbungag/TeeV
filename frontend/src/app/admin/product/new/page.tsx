import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import NewProductForm from '@/components/admin/product/new/NewProductForm/NewProductForm';

const page = () => {
  return (
    <div className="font-sans">
      <AdminNavigation page="newProduct" />
      <NewProductForm />
    </div>
  );
};

export default page;
