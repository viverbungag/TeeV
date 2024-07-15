import {
  createServerRunner,
  type NextServer,
} from '@aws-amplify/adapter-nextjs';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth/server';

const amplifyConfig = JSON.parse(
  String(process.env.NEXT_PUBLIC_AMPLIFY_CONFIG)
);

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
        console.error(error);
      }
    },
  });
}
