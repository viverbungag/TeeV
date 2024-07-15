'use client';
import React from 'react';

import { handleSignOut } from '@/app/amplify/cognito-actions';

const AdminSignoutButton = () => {
  return (
    <form action={handleSignOut}>
      <button type="submit">Signout</button>
    </form>
  );
};

export default AdminSignoutButton;
