import React, { FC } from 'react';

const TableRowSkeletonRow: FC = () => {
  return (
    <tr className="h-8 text-center">
      <td className="text-right w-1/12">
        <input type="checkbox" disabled className="mx-2" />
      </td>
      <td className="w-1/12">
        <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
      </td>
      <td className="w-1/3">
        <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
      </td>
      <td className="w-1/6">
        <div className="h-5 w-full 4 bg-gray-200 rounded animate-pulse" />
      </td>
      <td className="w-1/6">
        <div className="h-5 w-full 4 bg-gray-200 rounded animate-pulse" />
      </td>
      <td className="w-1/6">
        <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
      </td>
    </tr>
  );
};

export default TableRowSkeletonRow;
