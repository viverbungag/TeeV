'use client';
import AmplifyProvider from '@/app/amplify/amplify-config';
import React, { useState } from 'react';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <AmplifyProvider>{children}</AmplifyProvider>;
};

export default Providers;
