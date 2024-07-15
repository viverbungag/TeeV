import React, { useState } from 'react';

import PriceTableWithLegends from '@/components/admin/price-settings/PriceTableWithLegends/PriceTableWithLegends';
import type { PrintType } from '@/utilities/types/PriceSettingTypes';
import { ClothePackagingType } from '@/utilities/types/PriceSettingTypes';

const numberOfColors = 9;
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

const initialData = {
  frontPrintPrice: [
    {
      from: 6,
      to: 11,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 12,
      to: 18,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 19,
      to: 24,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 25,
      to: 36,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 37,
      to: 48,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 49,
      to: 72,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 73,
      to: 96,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 97,
      to: 120,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 121,
      to: 200,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 201,
      to: 300,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 301,
      to: 400,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 401,
      to: 500,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 501,
      to: 750,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 751,
      to: 1000,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 1001,
      to: 1500,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 1501,
      to: 2500,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 2501,
      to: 4000,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 4001,
      to: 6000,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
    {
      from: 6001,
      to: 9000,
      markup: 0,
      pricePerColorQuantity: initialPricePerColorQuantity,
    },
  ],
};

const AdminPriceSettings = () => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [data, setData] = useState<{ frontPrintPrice: Array<PrintType> }>(
    initialData
  );

  return (
    <div className="flex flex-col gap-8 w-full h-full ml-60 p-12">
      <h1 className="text-5xl font-bold leading-normal">Price Settings</h1>
      <div className="flex bg-background5 w-full">
        <div className="flex flex-col gap-12 bg-background5">
          <div className="flex flex-col gap-8 bg-background4 p-8 rounded-lg">
            <h1 className="text-2xl font-bold">Front Print Location</h1>
            <PriceTableWithLegends
              frontPrintPrice={data.frontPrintPrice}
              numberOfColors={numberOfColors}
            />
          </div>
          <div className="flex flex-col gap-8 bg-background4 p-8 rounded-lg">
            <h1 className="text-2xl font-bold">Back Print Location</h1>
            <PriceTableWithLegends
              frontPrintPrice={data.frontPrintPrice}
              numberOfColors={numberOfColors}
            />
          </div>
          <div className="flex flex-col gap-8 bg-background4 p-8 rounded-lg">
            <h1 className="text-2xl font-bold">
              Items per Package (Handling Charge)
            </h1>
            <div className="flex gap-8">
              {Object.keys(ClothePackagingType).map((type) => (
                <div key={type} className="flex items-center gap-4">
                  <label
                    htmlFor={type}
                    className="text-lg font-bold"
                  >{`${type}`}</label>
                  <input
                    type="number"
                    className="input input-md input-bordered"
                    name={type}
                    placeholder="Quantity per package"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 bg-background4 p-8 rounded-lg">
            <h1 className="text-2xl font-bold">
              Setup Charge per number of colors
            </h1>
            <div className="flex items-center gap-4">
              <input
                type="number"
                className="input input-md input-bordered w-[14rem]"
                name="setupCharge"
                placeholder="Input the setup charge here"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 bg-background4 p-8 rounded-lg">
            <h1 className="text-2xl font-bold">Admin Fees</h1>
            <div className="flex items-center gap-4">
              <input
                type="number"
                className="input input-md input-bordered w-[14rem]"
                name="setupCharge"
                placeholder="Input the admin fees here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPriceSettings;
