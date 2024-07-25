import React from 'react';

import type { InputValues } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  inputValues: InputValues;
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
};

const AdminProductPackagingType: React.FC<PropTypes> = ({
  inputValues,
  setInputValues,
}) => {
  const productPackagingTypeRadioInputOnChange = (packagingType: string) => {
    setInputValues({
      ...inputValues,
      clothePackagingType: packagingType,
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <p className="font-bold">Packaging Type of the product</p>
      <div className="flex gap-4">
        <div className="flex gap-2">
          <input
            type="radio"
            id="TSHIRT"
            name="radio-packaging-type"
            className="radio"
            onChange={() => productPackagingTypeRadioInputOnChange('TSHIRT')}
            checked={inputValues.clothePackagingType === 'TSHIRT'}
          />
          <label htmlFor="TSHIRT">TSHIRT</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="HOODIE"
            name="radio-packaging-type"
            className="radio"
            onChange={() => productPackagingTypeRadioInputOnChange('HOODIE')}
            checked={inputValues.clothePackagingType === 'HOODIE'}
          />
          <label htmlFor="HOODIE">HOODIE</label>
        </div>
      </div>
    </div>
  );
};

export default AdminProductPackagingType;
