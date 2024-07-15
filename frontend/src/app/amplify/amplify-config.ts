'use client';

import { Amplify } from 'aws-amplify';

const amplifyConfig = JSON.parse(
  String(process.env.NEXT_PUBLIC_AMPLIFY_CONFIG)
);

Amplify.configure(amplifyConfig, {
  ssr: true,
});

export default function AmplifyProvider({ children }: React.PropsWithChildren) {
  return children;
}
