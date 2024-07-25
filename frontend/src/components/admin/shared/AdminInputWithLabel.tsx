import React from 'react';

import type { InputValues } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  inputValues: InputValues;
  label: string;
  name: 'name';
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
  bold?: boolean;
  placeholder?: string;
};

const AdminInputWithLabel: React.FC<PropTypes> = ({
  label,
  bold = true,
  placeholder,
  name,
  inputValues,
  setInputValues,
}) => {
  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [name]: event.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <p className={`${bold && 'font-bold'}`}>{label}</p>
      <input
        className="input input-md fullwidth"
        placeholder={placeholder}
        value={inputValues[name]}
        onChange={inputOnChange}
      />
    </div>
  );
};

export default AdminInputWithLabel;
