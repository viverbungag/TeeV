'use client';
import React from 'react';

import AmplifyProvider from '@/app/amplify/amplify-config';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <AmplifyProvider>{children}</AmplifyProvider>;
};

export default Providers;
