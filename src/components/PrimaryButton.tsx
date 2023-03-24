import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick: () => void;
}
const PrimaryButton: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-10 px-4 py-2 bg-gradient-to-r max-w-min rounded-full tracking-wider text-white font-bold uppercase from-yellow-400 via-green-600 to-blue-500 bg-size-200 hover:bg-right-bottom ease-in duration-300">
      {children}
    </button>
  );
};

export default PrimaryButton;
