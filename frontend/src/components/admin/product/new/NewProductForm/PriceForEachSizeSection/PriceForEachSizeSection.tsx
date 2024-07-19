import React from 'react';

import type {
  ClothingSizes,
  InputValues,
} from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  headerLabel: string;
  inputValues: InputValues;
  pricePerColorType:
    | 'pricesPerColorOnWhiteClothes'
    | 'pricesPerColorOnColoredClothes';
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
};

const PriceForEachSizeSection: React.FC<PropTypes> = ({
  inputValues,
  setInputValues,
  pricePerColorType,
  headerLabel,
}) => {
  const pricesPerColorInputOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    sizeName: keyof typeof ClothingSizes,
    priceType: 'markup' | 'originalPrice'
  ) => {
    setInputValues({
      ...inputValues,
      [pricePerColorType]: {
        ...inputValues[pricePerColorType],
        [sizeName]: {
          ...inputValues[pricePerColorType][sizeName],
          [priceType]: Number(event.target.value),
        },
      },
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold">{headerLabel}</p>
      <table className="table text-center">
        <thead>
          <tr>
            <th />
            <th>Markup</th>
            <th>Original Price</th>
            <th>Sales Price</th>
          </tr>
        </thead>
        <tbody>
          {inputValues.availableSizes
            .filter((temp) => temp.value)
            .map((size) => (
              <tr key={size.name}>
                <td>
                  <p>{size.name}</p>
                </td>
                <td>
                  <input
                    type="number"
                    className="input input-sm w-[5rem]"
                    value={inputValues[pricePerColorType][size.name].markup}
                    onChange={(event) =>
                      pricesPerColorInputOnChange(event, size.name, 'markup')
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="input input-sm w-[5rem]"
                    value={
                      inputValues[pricePerColorType][size.name].originalPrice
                    }
                    onChange={(event) =>
                      pricesPerColorInputOnChange(
                        event,
                        size.name,
                        'originalPrice'
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="input disabled:input-bordered input-sm w-[5rem]"
                    disabled
                    value={(
                      Number(inputValues[pricePerColorType][size.name].markup) *
                      Number(
                        inputValues[pricePerColorType][size.name].originalPrice
                      )
                    ).toFixed(2)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceForEachSizeSection;
