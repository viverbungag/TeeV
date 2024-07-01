import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import React from 'react';

type PropTypes = {
  title: string;
  children: React.ReactNode;
};

const SideBarItems: React.FC<PropTypes> = ({ title, children }) => {
  return (
    <div>
      <h4 className={`${Coolvetica.className} text-xl font-bold mb-4`}>
        {title}
      </h4>
      {children}
    </div>
  );
};

export default SideBarItems;
