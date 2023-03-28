import React, { FC } from 'react';
import { useLocalStorage } from '../app/hooks/useLocalStorage';
import { classNames } from '../utils/utilities';

const Sidebar: FC = () => {
  const [sidebarMinimized, setSidebarMinimized] = useLocalStorage('sidebar', false);

  return (
    <div
      className={classNames(
        sidebarMinimized ? 'w-10' : 'w-40',
        'h-full text-center shrink-0 cursor-pointer items-center flex text-white bg-sidebar transition-all ease-in duration-300'
      )}
      onClick={() => setSidebarMinimized(!sidebarMinimized)}>
      <span className="mx-auto">Click to toggle</span>
    </div>
  );
};

export default Sidebar;
