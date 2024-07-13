'use client';
import { handleSignOut } from '@/app/amplify/cognito-actions';
import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminPriceSettings from '@/components/admin/price-settings/AdminPriceSettings';
import AdminSignoutButton from '@/components/admin/shared/AdminSignoutButton';
import React from 'react';

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
