'use client';

import React from 'react';
import Image from 'next/image';

import DragDropClickZone from '@/components/admin/shared/AdminProductFileUploader/DragDropClickZone';

type PropTypes = {
  defaultImages: File[];
  featureImage: File[];
  setDefaultImages: React.Dispatch<React.SetStateAction<File[]>>;
  setFeatureImage: React.Dispatch<React.SetStateAction<File[]>>;
};

const AdminProductFileUploader: React.FC<PropTypes> = ({
  featureImage,
  setFeatureImage,
  defaultImages,
  setDefaultImages,
}) => {
  // const [featureImage, setFeatureImage] = useState<File[]>([]);
  // const [defaultImages, setDefaultImages] = useState<File[]>([]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-4">
        <p className="font-bold">Featured Image</p>
        <div className="flex gap-4 w-full">
          <DragDropClickZone
            files={featureImage}
            setFiles={setFeatureImage}
            disabled={featureImage.length >= 1}
          />
          <div className="divider divider-horizontal" />
          <div>
            {featureImage[0] && (
              <Image
                src={URL.createObjectURL(featureImage[0])}
                width={100}
                height={100}
                alt="product image"
                className="w-auto h-[10rem] border-2 border-[#CC183C] drop-shadow-glowRed"
              />
            )}
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="flex flex-col gap-4">
        <p className="font-bold">Images</p>
        <div className="flex gap-4">
          <DragDropClickZone
            files={defaultImages}
            setFiles={setDefaultImages}
          />
          <div className="divider divider-horizontal" />
          <div className="flex flex-wrap gap-4">
            {defaultImages.map((file, index) => (
              <div key={index} className="relative w-[10rem] h-[10rem]">
                <Image
                  src={URL.createObjectURL(file)}
                  width={100}
                  height={100}
                  alt="product image"
                  className="w-auto h-[10rem] border-2 border-[#CC183C] drop-shadow-glowRed"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductFileUploader;
