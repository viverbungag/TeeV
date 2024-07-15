'use client';

import { Amplify } from 'aws-amplify';

export const amplifyConfig = {
  aws_project_region: String(process.env.NEXT_PUBLIC_AWS_PROJECT_REGION),
  aws_cognito_identity_pool_id: String(
    process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID
  ),
  aws_cognito_region: String(process.env.NEXT_PUBLIC_AWS_COGNITO_REGION),
  aws_user_pools_id: String(process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID),
  aws_user_pools_web_client_id: String(
    process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID
  ),
  aws_user_files_s3_bucket: String(
    process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET
  ),
  aws_user_files_s3_bucket_region: String(
    process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET_REGION
  ),
  oauth: {},
};

Amplify.configure(amplifyConfig, {
  ssr: true,
});

export default function AmplifyProvider({ children }: React.PropsWithChildren) {
  return children;
}
