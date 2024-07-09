'use client';

import { Amplify, type ResourcesConfig } from 'aws-amplify';
import amplifyConfig from '../../amplifyconfiguration.json';

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
  amplifyConfig,

  { ssr: true }
);

export default function AmplifyProvider({ children }: React.PropsWithChildren) {
  return children;
}
