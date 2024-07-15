import React from 'react';

import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';

type PropTypes = {
  children: React.ReactNode;
  title: string;
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
