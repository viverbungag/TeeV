'use client';
import React from 'react';

import { handleSignOut } from '@/app/amplify/cognito-actions';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminProducts from '@/components/admin/products/AdminProducts/AdminProducts';

const page = () => {
  return (
    <div className="bg-background5">
      <form action={handleSignOut}>
        <button type="submit">Signout</button>
      </form>
      <div className="flex">
        <AdminNavigation />
        <AdminProducts />
      </div>
    </div>
  );
};

export default page;
