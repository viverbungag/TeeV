'use client';

import React from 'react';
import Image from 'next/image';
import useWindowSize from '@/utilities/useWindowSize';

type PropTypes = {
  srcSm?: string;
  srcMd?: string;
  srcLg?: string;
  srcXl?: string;
  src2Xl: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

const ResponsiveImage: React.FC<PropTypes> = ({
  srcSm,
  srcMd,
  srcLg,
  srcXl,
  src2Xl,
  alt,
  width,
  height,
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
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ResponsiveImage;
