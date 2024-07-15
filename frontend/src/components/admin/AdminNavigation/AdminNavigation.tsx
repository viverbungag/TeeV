import React from 'react';
import Link from 'next/link';

import Cabinet from '@/utilities/SVGs/Cabinet';
import Clothes from '@/utilities/SVGs/Clothes';
import Dashboard from '@/utilities/SVGs/Dashboard';

const AdminNavigation = () => {
  return (
    <div className="w-[15rem] bg-background4 h-full p-6">
      <ul className="flex flex-col gap-4 ">
        <Link href="/admin/dashboard">
          <li className="flex gap-2 items-center">
            <Dashboard width={20} height={20} />
            Dashboard
          </li>
        </Link>
        <Link href="/admin/products">
          <li className="flex gap-2 items-center">
            <Clothes width={20} height={20} />
            Products
          </li>
        </Link>
        <Link href="/admin/categories">
          <li className="flex gap-2 items-center">
            <Cabinet />
            Categories
          </li>
        </Link>
        <Link href="/admin/price-settings">
          <li className="flex gap-2 items-center">
            <Cabinet />
            Price Settings
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminNavigation;
