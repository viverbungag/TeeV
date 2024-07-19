export enum ClothePackagingType {
  HOODIE = 'HOODIE',
  TSHIRT = 'TSHIRT',
}

export type PricePerColorQuantity = {
  [index: string]: number;
};

export type PrintType = {
  from: number;
  pricePerColorQuantity: PricePerColorQuantity;
  to: number;
};
