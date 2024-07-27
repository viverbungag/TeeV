// 'use client';
import React from 'react';

// import type { TransferProgressEvent } from 'aws-amplify/storage';
// import { getProperties, list, uploadData } from 'aws-amplify/storage';

const Page = () => {
  // const [file, setFile] = useState<File | null>(null);
  // console.log(file);

  // const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files;
  //   if (files) {
  //     setFile(files[0]);
  //   }
  // };

  // const onProgress = (event: TransferProgressEvent) => {
  //   console.log(event);
  // };

  // const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   try {
  //     const result = await list({
  //       path: 'public/album/',
  //     });
  //     console.log('File Properties ', result);
  //   } catch (error) {
  //     console.log('Error ', error);
  //   }
  // if (file === null) return;
  // try {
  //   const result = await uploadData({
  //     path: `public/album/${file.name}`,
  //     // Alternatively, path: ({identityId}) => `protected/${identityId}/album/2024/1.jpg`
  //     data: file,
  //     options: {
  //       onProgress, // Optional progress callback.
  //     },
  //   }).result;
  //   console.log('Succeeded: ', result);
  // } catch (error) {
  //   console.log('Error : ', error);
  // }
  // };

  return (
    // <form onSubmit={onFormSubmit}>
    // <input type="file" onChange={onFileChange} />
    // <button type="submit">Submit</button>
    // </form>
    // <AdminProductFileUploader />
    <div />
  );
};

export default Page;
