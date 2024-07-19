import React, { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { initialData } from '@/components/admin/price-settings/PriceSettingsInitialData';
import PriceTableWithLegends from '@/components/admin/price-settings/PriceTableWithLegends/PriceTableWithLegends';
import {
  fetchPriceSettings,
  updatePriceSettings,
} from '@/utilities/fetch/price-settings';
import type { PriceSettings } from '@/utilities/types/shared.types';

const numberOfColors = 9;

const AdminPriceSettings = () => {
  const priceSettingsQuery = useQuery<PriceSettings>({
    queryKey: ['price-settings'],
    queryFn: () => fetchPriceSettings(),
  });

  const priceSettings = priceSettingsQuery.data;

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [data, setData] = useState<PriceSettings>(priceSettings || initialData);

  useEffect(() => {
    if (priceSettings) {
      setData(priceSettings);
    }
  }, [priceSettings]);

  const onUpdateButtonClick = async () => {
    await updatePriceSettings(data);
  };

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    setData((prevData: any) => ({
      ...prevData,
      [name]: Number(value),
    }));
  };
  if (priceSettingsQuery.isLoading) {
    return (
      <div className="flex items-center justify-center gap-8 w-screen h-screen bg-background5 ml-60 p-12">
        <span className="loading loading-spinner w-[3rem] text-loadingColor" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 w-full h-full ml-60 p-12">
      <h1 className="text-5xl font-bold leading-normal">Price Settings</h1>
      <div className="flex bg-background5 w-full">
        <div className="flex flex-col gap-12 bg-background5">
          <div className="flex flex-col gap-8 bg-background4 p-8 rounded-lg">
            <h1 className="text-2xl font-bold">Front Print Location</h1>
            <PriceTableWithLegends
              printPrice={data.frontPrintPrice}
              keyName="frontPrintPrice"
              numberOfColors={numberOfColors}
              setData={setData}
            />
          </div>
          <div className="flex flex-col gap-8 bg-background4 p-8 rounded-lg">
            <h1 className="text-2xl font-bold">Back Print Location</h1>
            <PriceTableWithLegends
              printPrice={data.backPrintPrice}
              keyName="backPrintPrice"
              numberOfColors={numberOfColors}
              setData={setData}
            />
          </div>
          <div className="flex flex-col gap-8 bg-background4 p-8 rounded-lg">
            <h1 className="text-2xl font-bold">
              Items per Package (Handling Charge)
            </h1>
            <div className="flex gap-8">
              <div className="flex items-center gap-4">
                <label
                  htmlFor="numberOfTShirtPerPackage"
                  className="text-lg font-bold"
                >
                  TSHIRT
                </label>
                <input
                  type="number"
                  className="input input-md input-bordered"
                  name="numberOfTShirtPerPackage"
                  placeholder="Quantity per package"
                  value={data.numberOfTShirtPerPackage}
                  onChange={inputOnChange}
                />
              </div>
              <div className="flex items-center gap-4">
                <label
                  htmlFor="numberOfHoodiePerPackage"
                  className="text-lg font-bold"
                >
                  HOODIE
                </label>
                <input
                  type="number"
                  className="input input-md input-bordered"
                  name="numberOfHoodiePerPackage"
                  placeholder="Quantity per package"
                  value={data.numberOfHoodiePerPackage}
                  onChange={inputOnChange}
                />
              </div>
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
                name="setupChargePerNumberOfColors"
                placeholder="Input the setup charge here"
                value={data.setupChargePerNumberOfColors}
                onChange={inputOnChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 bg-background4 p-8 rounded-lg">
            <h1 className="text-2xl font-bold">Admin Fees</h1>
            <div className="flex items-center gap-4">
              <input
                type="number"
                className="input input-md input-bordered w-[14rem]"
                name="adminFees"
                placeholder="Input the admin fees here"
                value={data.adminFees}
                onChange={inputOnChange}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn fixed bottom-10 right-10 bg-buttonBackgroundColor border-buttonBackgroundColor"
        onClick={onUpdateButtonClick}
      >
        Update
      </button>
    </div>
  );
};

export default AdminPriceSettings;
