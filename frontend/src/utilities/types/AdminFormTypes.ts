export enum ClothingSizes {
  '2XL' = '2XL',
  '3XL' = '3XL',
  '4XL' = '4XL',
  '5XL' = '5XL',
  LG = 'LG',
  M = 'M',
  S = 'S',
  XL = 'XL',
  XS = 'XS',
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
