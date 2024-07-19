/* eslint-disable typescript-sort-keys/string-enum */

export enum ClothingSizes {
  XS = 'XS',
  S = 'S',
  M = 'M',
  LG = 'LG',
  XL = 'XL',
  'XL2' = '2XL',
  'XL3' = '3XL',
  'XL4' = '4XL',
  'XL5' = '5XL',
}

export enum ClothingSizeParts {
  'BODY LENGTH' = 'BODY LENGTH',
  'BODY WIDTH' = 'BODY WIDTH',
  'FULL BODY LENGTH' = 'FULL BODY LENGTH',
  'NECK CIRCUMFERENCE' = 'NECK CIRCUMFERENCE',
  'SLEEVE LENGTH' = 'SLEEVE LENGTH',
}

type sizesInfo = {
  [key in ClothingSizes]: {
    [key in ClothingSizeParts]: string;
  };
};

export type InputValues = {
  availableClotheSizeParts: Array<{
    name: ClothingSizeParts;
    value: boolean;
  }>;
  availableSizes: Array<{
    name: ClothingSizes;
    value: boolean;
  }>;
  featureInfoItems: string[];
  fiberInfoItems: string[];
  hasFeaturesInfo: boolean;
  hasFiberInfo: boolean;
  hasSizeInfo: boolean;
  isProductVisibleInWebsite: boolean;
  sizesInfo: sizesInfo;
};
