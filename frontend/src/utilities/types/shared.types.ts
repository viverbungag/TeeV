import type { PrintType } from '@/utilities/types/PriceSettingTypes';

/* eslint-disable unused-imports/no-unused-vars */
export type Product = {
  availableClotheSizeParts: string;
  availableSizes: string;
  featuresInfoItems: string;
  fiberInfoItems: string;
  hasFeaturesInfo: boolean;
  hasFiberInfo: boolean;
  hasSizeInfo: boolean;
  id: number;
  isProductVisibleInWebsite: boolean;
  name: string;
  sizePricesForColored: string;
  sizePricesForWhite: string;
};

export type PriceSettings = {
  adminFees: number;
  backPrintPrice: Array<PrintType>;
  frontPrintPrice: Array<PrintType>;
  maximumQuantity: number;
  minimumQuantity: number;
  numberOfHoodiePerPackage: number;
  numberOfTShirtPerPackage: number;
  pricePerHoodiePackage: number;
  pricePerTShirtPackage: number;
  setupChargePerNumberOfColors: number;
};

export type ErrorMessage = {
  message: string;
  type: string;
};
