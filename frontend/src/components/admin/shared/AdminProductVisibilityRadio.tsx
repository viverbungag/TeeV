import React from 'react';

import type { InputValues } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  inputValues: InputValues;
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
};

const AdminProductVisibilityRadio: React.FC<PropTypes> = ({
  inputValues,
  setInputValues,
}) => {
  const productVisiblyRadioInputOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value === 'yes') {
      setInputValues({
        ...inputValues,
        isProductVisibleInWebsite: true,
      });
    }
    if (event.target.value === 'no') {
      setInputValues({
        ...inputValues,
        isProductVisibleInWebsite: false,
      });
    }
  };

  return (
    <div className="flex gap-8">
      <p>Is the Product Visible in the website?</p>
      <div className="flex gap-4">
        <div className="flex gap-2">
          <input
            type="radio"
            id="yes"
            name="radio-product-visibility"
            className="radio"
            value="yes"
            onChange={productVisiblyRadioInputOnChange}
            checked={inputValues.isProductVisibleInWebsite}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="no"
            name="radio-product-visibility"
            className="radio"
            value="no"
            onChange={productVisiblyRadioInputOnChange}
            checked={!inputValues.isProductVisibleInWebsite}
          />
          <label htmlFor="no">No</label>
        </div>
      </div>
    </div>
  );
};

export default AdminProductVisibilityRadio;
