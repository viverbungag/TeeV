import React from 'react';

const Remove = ({
  width = 48,
  height = 48,
  color = 'currentColor',
}: {
  color?: string;
  height?: number;
  width?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g fill={color}>
        <path d="M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" />
        <path
          fillRule="evenodd"
          d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default Remove;
