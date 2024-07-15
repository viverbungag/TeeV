'use client';
import React from 'react';

import { handleSignOut } from '@/app/amplify/cognito-actions';

import Logout from '@/utilities/SVGs/Logout';

const AdminSignoutButton = () => {
  return (
    <form className="flex gap-2 items-center" action={handleSignOut}>
      <Logout width={20} height={20} />
      <button type="submit">Signout</button>
    </form>
  );
};

export default AdminSignoutButton;
