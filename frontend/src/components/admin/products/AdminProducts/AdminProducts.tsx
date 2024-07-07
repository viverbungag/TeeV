import Link from 'next/link';
import React from 'react';

const AdminProducts = () => {
  return (
    <div>
      <Link href="/admin/product/new">
        <button className="btn btn-sm">Add a Product</button>
      </Link>
    </div>
  );
};

export default AdminProducts;
