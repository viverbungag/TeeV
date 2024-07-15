import React from 'react';

type PropTypes = {
  label: string;
  bold?: boolean;
  placeholder?: string;
};

const AdminInputWithLabel: React.FC<PropTypes> = ({
  label,
  bold = true,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className={`${bold && 'font-bold'}`}>{label}</p>
      <input className="input input-md fullwidth" placeholder={placeholder} />
    </div>
  );
};

export default AdminInputWithLabel;
