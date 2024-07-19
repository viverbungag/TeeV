'use client';
import React, { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AmplifyProvider from '@/app/amplify/amplify-config';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <AmplifyProvider>{children}</AmplifyProvider>
    </QueryClientProvider>
  );
};

export default Providers;
