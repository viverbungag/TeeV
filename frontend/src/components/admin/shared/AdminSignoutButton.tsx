'use client';
import { handleSignOut } from '@/app/amplify/cognito-actions';
import React from 'react';

const AdminSignoutButton = () => {
  return (
    <form action={handleSignOut}>
      <button type="submit">Signout</button>
    </form>
  );
};

export default AdminSignoutButton;
