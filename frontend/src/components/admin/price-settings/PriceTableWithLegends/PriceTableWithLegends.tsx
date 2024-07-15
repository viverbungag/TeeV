import React from 'react';

import type { PrintType } from '@/utilities/types/PriceSettingTypes';

type PropTypes = {
  frontPrintPrice: Array<PrintType>;
  numberOfColors: number;
};

const PriceTableWithLegends: React.FC<PropTypes> = ({
  frontPrintPrice,
  numberOfColors,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <p className="font-bold">Legends:</p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-priceMarkupIndicationBackground w-[1rem] h-[1rem]" />
              <p>Markup</p>
            </div>
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
            <tr className="bg-priceMarkupIndicationBackground">
              <th>Markup</th>
              {frontPrintPrice.map((price, index) => (
                <th key={price.from + '-' + String(index)}>
                  <input type="text" className="input input-sm w-[4rem]" />
                </th>
              ))}
            </tr>
            <tr className="bg-clothingQuantityFromAndToIndicationBackground">
              <th>from</th>
              {frontPrintPrice.map((price, index) => (
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
              {frontPrintPrice.map((price, index) => (
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
            {new Array(numberOfColors).fill(0).map((__, index) => (
              <tr key={index}>
                <td className="bg-numberOfColorsIndicationBackground border-r-2 border-[#A9A9A9]">
                  <input
                    className="input input-sm w-[4rem]"
                    value={index}
                    disabled
                  />
                </td>
                {frontPrintPrice.map((price, index2) => (
                  <td
                    key={
                      price.from + '-' + String(index) + '-' + String(index2)
                    }
                    className="bg-priceDataIndicationBackground"
                  >
                    <input type="text" className="input input-sm w-[4rem]" />
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
