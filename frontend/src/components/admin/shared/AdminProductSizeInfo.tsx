import AdminToggle from '@/components/admin/shared/AdminToggle';
import { ClothingSizes, InputValues } from '@/utilities/types/AdminFormTypes';
import React from 'react';

type PropTypes = {
  inputValues: InputValues;
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
};

const AdminProductSizesInfo: React.FC<PropTypes> = ({
  inputValues,
  setInputValues,
}) => {
  const onToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.checked,
    });
  };

  const onAvailableSizesCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValues({
      ...inputValues,
      availableSizes: inputValues.availableSizes.map((size) =>
        size.name === event.target.name
          ? { ...size, value: event.target.checked }
          : size
      ),
    });
  };

  const onAvailableClotheSizePartsCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValues({
      ...inputValues,
      availableClotheSizeParts: inputValues.availableClotheSizeParts.map(
        (sizePart) =>
          sizePart.name === event.target.name
            ? { ...sizePart, value: event.target.checked }
            : sizePart
      ),
    });
  };

  const sizeInfoInputOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const size = String(
      event.target.dataset.size
    ) as keyof typeof ClothingSizes;
    const sizePart = String(event.target.dataset.sizepart);

    setInputValues({
      ...inputValues,
      sizesInfo: {
        ...inputValues.sizesInfo,
        [size]: {
          ...inputValues.sizesInfo[size],
          [sizePart]: event.target.value,
        },
      },
    });
  };
  return (
    <div>
      <AdminToggle
        label="Is info on Size shown?"
        onChange={onToggleChange}
        name="hasSizeInfo"
        checked={inputValues.hasSizeInfo}
      />

      <div className="flex flex-col gap-8 pl-4 mt-8">
        <div className="flex flex-col gap-4">
          <p className="font-bold">Sizes</p>
          <div className="flex gap-4">
            {inputValues.availableSizes.map((size) => (
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  name={size.name}
                  onChange={onAvailableSizesCheckboxChange}
                  checked={size.value}
                />
                <label htmlFor={size.name}>{size.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold">Clothe Size Parts</p>
          <div className="flex gap-4 flex-wrap">
            {inputValues.availableClotheSizeParts.map((sizePart) => (
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  name={sizePart.name}
                  onChange={onAvailableClotheSizePartsCheckboxChange}
                  checked={sizePart.value}
                />
                <label htmlFor={sizePart.name}>{sizePart.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <p className="font-bold">Clothing Measurements</p>
          <table className="table align-middle text-center">
            <thead>
              <tr>
                <th></th>
                {inputValues.availableClotheSizeParts
                  .filter((s) => s.value)
                  .map((sizePart) => (
                    <th>{sizePart.name}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {inputValues.availableSizes
                .filter((s) => s.value)
                .map((size) => (
                  <tr>
                    <td>{size.name}</td>
                    {inputValues.availableClotheSizeParts
                      .filter((s) => s.value)
                      .map((sizePart) => (
                        <td className="">
                          <input
                            type="number"
                            className="input input-sm w-[5rem]"
                            data-size={size.name}
                            data-sizepart={sizePart.name}
                            onChange={sizeInfoInputOnChange}
                            value={
                              inputValues.sizesInfo[size.name][sizePart.name]
                            }
                          />
                        </td>
                      ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold">White Clothing Size Prices</p>
          <div className="flex flex-wrap gap-4">
            {inputValues.availableSizes
              .filter((s) => s.value)
              .map((size) => (
                <div className="flex items-center gap-2" key={size.name}>
                  <p className="text-sm ">{size.name}:</p>
                  <input type="number" className="input input-sm w-[5rem]" />
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold">Colored Clothing Size Prices</p>
          <div className="flex flex-wrap gap-4">
            {inputValues.availableSizes
              .filter((s) => s.value)
              .map((size) => (
                <div className="flex items-center gap-2" key={size.name}>
                  <p className="text-sm">{size.name}:</p>
                  <input type="number" className="input input-sm w-[5rem]" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductSizesInfo;
