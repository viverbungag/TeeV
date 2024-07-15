import React from 'react';
import Link from 'next/link';

const AdminProducts = () => {
  return (
    <div className="ml-60">
      <Link href="/admin/product/new">
        <button className="btn btn-md">Add a Product</button>
      </Link>
    </div>
  );
};

export default AdminProducts;
