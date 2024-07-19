import React from 'react';

import type { PrintType } from '@/utilities/types/PriceSettingTypes';
import type { PriceSettings } from '@/utilities/types/shared.types';

type PropTypes = {
  keyName: string;
  numberOfColors: number;
  printPrice: Array<PrintType>;
  setData: React.Dispatch<React.SetStateAction<PriceSettings>>;
};

const PriceTableWithLegends: React.FC<PropTypes> = ({
  printPrice,
  numberOfColors,
  keyName,
  setData,
}) => {
  const pricesOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    colorIndex: number,
    rangeIndex: number
  ) => {
    const value = event.target.value;
    const newPrice = [...printPrice];
    newPrice[rangeIndex].pricePerColorQuantity[String(colorIndex)] =
      Number(value);
    setData((prevData: any) => ({
      ...prevData,
      [keyName]: newPrice,
    }));
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <p className="font-bold">Legends:</p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-clothingQuantityFromAndToIndicationBackground w-[1rem] h-[1rem]" />
            <p>From & To</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-numberOfColorsIndicationBackground w-[1rem] h-[1rem]" />
            <p>Number of Colors</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-priceDataIndicationBackground w-[1rem] h-[1rem]" />
            <p>Price</p>
          </div>
        </div>
      </div>
      <div className="max-w-[80rem] overflow-x-auto">
        <table className="table">
          <thead className="border-[#A9A9A9] border-b-2">
            <tr className="bg-clothingQuantityFromAndToIndicationBackground">
              <th>from</th>
              {printPrice.map((price, index) => (
                <th key={price.from + '-' + String(index)}>
                  <input
                    type="text"
                    className="input input-sm w-[4rem]"
                    value={price.from}
                    disabled
                  />
                </th>
              ))}
            </tr>
            <tr className="bg-clothingQuantityFromAndToIndicationBackground">
              <th>to</th>
              {printPrice.map((price, index) => (
                <th key={price.from + '-' + String(index)}>
                  <input
                    type="text"
                    className="input input-sm w-[4rem]"
                    value={price.to}
                    disabled
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {new Array(numberOfColors).fill(0).map((__, index: number) => (
              <tr key={index}>
                <td className="bg-numberOfColorsIndicationBackground border-r-2 border-[#A9A9A9]">
                  <input
                    className="input input-sm w-[4rem]"
                    value={index}
                    disabled
                  />
                </td>
                {printPrice.map((price, index2) => (
                  <td
                    key={
                      price.from + '-' + String(index) + '-' + String(index2)
                    }
                    className="bg-priceDataIndicationBackground"
                  >
                    <input
                      type="text"
                      className="input input-sm w-[4rem]"
                      value={
                        printPrice[index2].pricePerColorQuantity[String(index)]
                      }
                      onChange={(event) => pricesOnChange(event, index, index2)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTableWithLegends;
