import React from 'react';
import Link from 'next/link';

import AdminSignoutButton from '@/components/admin/shared/AdminSignoutButton';
import Cabinet from '@/utilities/SVGs/Cabinet';
import Clothes from '@/utilities/SVGs/Clothes';
import Dashboard from '@/utilities/SVGs/Dashboard';
import { PriceTag } from '@/utilities/SVGs/PriceTag';

type PropTypes = {
  page: string;
};

const navItems = [
  {
    title: 'Dashboard',
    icon: <Dashboard width={20} height={20} />,
    page: 'dashboard',
    href: '/admin/dashboard',
  },
  {
    title: 'Products',
    icon: <Clothes width={20} height={20} />,
    page: 'products',
    href: '/admin/products',
  },
  {
    title: 'Add a Product',
    icon: <Clothes width={20} height={20} />,
    page: 'newProduct',
    href: '/admin/product/new',
  },
  {
    title: 'Categories',
    icon: <Cabinet />,
    page: 'categories',
    href: '/admin/categories',
  },
  {
    title: 'Price Settings',
    icon: <PriceTag width={20} height={20} />,
    page: 'price-settings',
    href: '/admin/price-settings',
  },
];

const AdminNavigation: React.FC<PropTypes> = ({ page }) => {
  return (
    <div className="w-[15rem] bg-background4 h-full p-4 fixed left-0">
      <ul className="flex flex-col justify-between gap-2 h-full">
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link key={item.page} href={item.href}>
              <li
                className={`flex gap-2 p-4 rounded items-center ${
                  page === item.page && 'bg-activeNavigationItemBaclground'
                }`}
              >
                {item.icon}
                {item.title}
              </li>
            </Link>
          ))}
        </div>

        <div className="pl-4 pt-4 border-borderColor border-t-2">
          <AdminSignoutButton />
        </div>
      </ul>
    </div>
  );
};

export default AdminNavigation;
