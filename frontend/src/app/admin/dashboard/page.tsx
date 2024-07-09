'use client';

import { handleSignOut } from '@/app/amplify/cognito-actions';
import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminDashboard from '@/components/admin/dashboard/AdminDashboard/AdminDashboard';
import React from 'react';

const page = () => {
  return (
    <div className="bg-background5">
      <form action={handleSignOut}>
        <button type="submit">Signout</button>
      </form>
      <div className="flex">
        <AdminNavigation />
        <AdminDashboard />
      </div>
    </div>
  );
};

export default page;
