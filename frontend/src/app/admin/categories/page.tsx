'use client';
import React from 'react';

import { handleSignOut } from '@/app/amplify/cognito-actions';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminCategories from '@/components/admin/categories/AdminCategories/AdminCategories';

const page = () => {
  return (
    <div className="bg-background5">
      <form action={handleSignOut}>
        <button type="submit">Signout</button>
      </form>
      <div className="flex">
        <AdminNavigation />
        <AdminCategories />
      </div>
    </div>
  );
};

export default page;
