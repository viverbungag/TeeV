import React from 'react';

type PropTypes = {
  checked: boolean;
  label: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const AdminToggle: React.FC<PropTypes> = ({
  label,
  onChange,
  name,
  checked,
}) => {
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        className="toggle toggle-md toggle-success"
        onChange={onChange}
        name={name}
        checked={checked}
      />

      <p className="font-bold">{label}</p>
    </div>
  );
};

export default AdminToggle;
