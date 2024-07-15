'use client';

import React from 'react';
import Image from 'next/image';

import useWindowSize from '@/utilities/useWindowSize';

type PropTypes = {
  alt: string;
  className: string;
  src2Xl: string;
  srcLg?: string;
  srcMd?: string;
  srcSm?: string;
  srcXl?: string;
};

const ResponsiveImage: React.FC<PropTypes> = ({
  srcSm,
  srcMd,
  srcLg,
  srcXl,
  src2Xl,
  alt,
  className,
}) => {
  const { width: windowWidthSize } = useWindowSize();
  const srcToUse =
    windowWidthSize < 640 && srcSm
      ? srcSm
      : windowWidthSize < 768 && srcMd
        ? srcMd
        : windowWidthSize < 1024 && srcLg
          ? srcLg
          : windowWidthSize < 1280 && srcXl
            ? srcXl
            : src2Xl;

  return (
    <Image
      src={srcToUse}
      alt={alt}
      className={className}
      fill
      objectFit="cover"
    />
  );
};

export default ResponsiveImage;
