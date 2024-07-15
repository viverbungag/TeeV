import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminCategories from '@/components/admin/categories/AdminCategories/AdminCategories';

const page = () => {
  return (
    <div className="bg-background5">
      <div>
        <AdminNavigation page="categories" />
        <AdminCategories />
      </div>
    </div>
  );
};

export default page;
