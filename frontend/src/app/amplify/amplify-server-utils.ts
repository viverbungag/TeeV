import { authConfig } from '@/app/amplify/amplify-config';
import { NextServer, createServerRunner } from '@aws-amplify/adapter-nextjs';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth/server';
import amplifyConfig from '../../amplifyconfiguration.json';

export const { runWithAmplifyServerContext } = createServerRunner({
  config: amplifyConfig,
});

export async function authenticatedUser(context: NextServer.Context) {
  return await runWithAmplifyServerContext({
    nextServerContext: context,
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        if (!session.tokens) {
          return;
        }
        const user = {
          ...(await getCurrentUser(contextSpec)),
        };

        return user;
      } catch (error) {
        console.log(error);
      }
    },
  });
}
