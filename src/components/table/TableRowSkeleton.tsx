import React, { FC } from 'react';
import TableRowSkeletonRow from './TableRowSkeletonRow';

const TableRowSkeleton: FC = () => {
  return (
    <tbody>
      <TableRowSkeletonRow />
      <TableRowSkeletonRow />
      <TableRowSkeletonRow />
    </tbody>
  );
};

export default TableRowSkeleton;
