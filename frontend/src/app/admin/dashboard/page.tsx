import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminDashboard from '@/components/admin/dashboard/AdminDashboard/AdminDashboard';

const page = () => {
  return (
    <div className="bg-background5">
      <div className="flex">
        <AdminNavigation page="dashboard" />
        <AdminDashboard />
      </div>
    </div>
  );
};

export default page;
