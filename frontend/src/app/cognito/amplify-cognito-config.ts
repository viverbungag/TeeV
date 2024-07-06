'use client';

import { Amplify, type ResourcesConfig } from 'aws-amplify';

export const authConfig: ResourcesConfig['Auth'] = {
  Cognito: {
    userPoolId: String(process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID),
    userPoolClientId: String(process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID),
    loginWith: {
      username: true,
    },
  },
};

Amplify.configure(
  {
    Auth: authConfig,
  },
  { ssr: true }
);

export default function AmplifyProvider({ children }: React.PropsWithChildren) {
  return children;
}
