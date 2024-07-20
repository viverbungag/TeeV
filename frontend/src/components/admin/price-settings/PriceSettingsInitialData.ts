const initialPricePerColorQuantity = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
};

const printPriceInitialData = [
  {
    from: 6,
    to: 11,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 12,
    to: 18,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 19,
    to: 24,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 25,
    to: 36,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 37,
    to: 48,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 49,
    to: 72,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 73,
    to: 96,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 97,
    to: 120,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 121,
    to: 200,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 201,
    to: 300,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 301,
    to: 400,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 401,
    to: 500,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 501,
    to: 750,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 751,
    to: 1000,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 1001,
    to: 1500,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 1501,
    to: 2500,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 2501,
    to: 4000,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 4001,
    to: 6000,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
  {
    from: 6001,
    to: 9000,
    pricePerColorQuantity: initialPricePerColorQuantity,
  },
];

export const initialData = {
  frontPrintPrice: printPriceInitialData,
  backPrintPrice: printPriceInitialData,
  numberOfHoodiePerPackage: 0,
  numberOfTShirtPerPackage: 0,
  setupChargePerNumberOfColors: 0,
  adminFees: 0,
  minimumQuantity: 0,
  maximumQuantity: 0,
  pricePerTShirtPackage: 0,
  pricePerHoodiePackage: 0,
};
