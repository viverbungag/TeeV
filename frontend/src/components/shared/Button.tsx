import Oswald from '@/utilities/fonts/oswald/oswald';
import React, { ReactNode } from 'react';

type PropTypes = {
  children: ReactNode;
};

const Button: React.FC<PropTypes> = ({ children }) => {
  return (
    <button
      className={`${Oswald.className} bg-primary w-fit py-3 px-6 rounded-md text-[1rem]`}
    >
      {children}
    </button>
  );
};

export default Button;
