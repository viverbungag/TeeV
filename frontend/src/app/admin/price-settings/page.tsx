'use client';
import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminPriceSettings from '@/components/admin/price-settings/AdminPriceSettings';
import AdminSignoutButton from '@/components/admin/shared/AdminSignoutButton';

const page = () => {
  return (
    <div className="bg-background5">
      <AdminSignoutButton />
      <div className="flex">
        <AdminNavigation />
        <AdminPriceSettings />
      </div>
    </div>
  );
};

export default page;
