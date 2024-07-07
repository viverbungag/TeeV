import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import Oswald from '@/utilities/fonts/oswald/oswald';
import React from 'react';

type PropTypes = {
  label: string;
};

const AdminInputWithLabel: React.FC<PropTypes> = ({ label }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className={`font-bold`}>{label}</p>
      <input
        className="input input-md fullwidth"
        placeholder="Input the text here"
      />
    </div>
  );
};

export default AdminInputWithLabel;
