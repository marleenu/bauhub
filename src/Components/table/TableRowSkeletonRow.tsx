import React, { FC } from 'react';

const TableRowSkeletonRow: FC = () => {
  return (
    <div className="h-8 text-center">
      <div className="w-1/12">
        <input type="checkbox" className="my-1" />
      </div>
      <div className="w-1/12">
        <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="w-1/3">
        <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="w-1/6">
        <div className="h-5 w-full 4 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="w-1/6">
        <div className="h-5 w-full 4 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="w-1/6">
        <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
};

export default TableRowSkeletonRow;
