export enum ClothePackagingType {
  HOODIE = 'HOODIE',
  TSHIRT = 'TSHIRT',
}

type PricePerColorQuantity = {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
};

export type PrintType = {
  from: number;
  markup: number;
  pricePerColorQuantity: PricePerColorQuantity;
  to: number;
};
