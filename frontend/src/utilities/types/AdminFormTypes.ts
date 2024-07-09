export enum ClothingSizes {
  XS = 'XS',
  S = 'S',
  M = 'M',
  LG = 'LG',
  XL = 'XL',
  '2XL' = '2XL',
  '3XL' = '3XL',
  '4XL' = '4XL',
  '5XL' = '5XL',
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
  hasFiberInfo: boolean;
  fiberInfoItems: string[];
  hasFeaturesInfo: boolean;
  featureInfoItems: string[];
  isProductVisibleInWebsite: boolean;
  hasSizeInfo: boolean;
  availableSizes: Array<{
    name: ClothingSizes;
    value: boolean;
  }>;
  availableClotheSizeParts: Array<{
    name: ClothingSizeParts;
    value: boolean;
  }>;
  sizesInfo: sizesInfo;
};
