'use client';
import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminPriceSettings from '@/components/admin/price-settings/AdminPriceSettings';

const page = () => {
  return (
    <div className="bg-background5">
      <div className="flex">
        <AdminNavigation page="price-settings" />
        <AdminPriceSettings />
      </div>
    </div>
  );
};

export default page;
