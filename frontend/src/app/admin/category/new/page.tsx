import React from 'react';
import { getProperties } from 'aws-amplify/storage';

const page = async () => {
  try {
    const result = await getProperties({
      path: ({ identityId }) => `private/${identityId}/images/a.png`,
    });
    console.log('File Properties ', result);
  } catch (error) {
    console.log('Error ', error);
  }
  return <div className="font-sans"></div>;
};

export default page;
