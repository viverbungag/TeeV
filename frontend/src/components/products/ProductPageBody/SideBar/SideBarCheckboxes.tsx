import React from 'react';

type PropTypes = {
  items: string[];
};

const SideBarCheckboxes: React.FC<PropTypes> = ({ items }) => {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2">
          <input type="checkbox" className="checkbox checkbox-xs" />
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default SideBarCheckboxes;
