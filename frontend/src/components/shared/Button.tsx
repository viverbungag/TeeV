import type { ReactNode } from 'react';
import React from 'react';

import Oswald from '@/utilities/fonts/oswald/oswald';

type PropTypes = {
  children: ReactNode;
  styleType?: 'primary' | 'secondary';
};

const Button: React.FC<PropTypes> = ({ styleType, children }) => {
  if (styleType === 'primary') {
    return (
      <button
        className={`${Oswald.className} bg-primaryT border-primaryT font-bold border-2 w-fit py-2 px-6 rounded-md text-[1rem]`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${Oswald.className} border-primaryT text-white font-bold border-2 w-fit py-2 px-6 rounded-md text-[1rem]`}
    >
      {children}
    </button>
  );
};

export default Button;
