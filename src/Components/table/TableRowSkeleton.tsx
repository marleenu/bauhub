import React, { FC } from 'react';
import TableRowSkeletonRow from './TableRowSkeletonRow';

const TableRowSkeleton: FC = () => {
  return (
    <>
      <TableRowSkeletonRow />
      <TableRowSkeletonRow />
      <TableRowSkeletonRow />
    </>
  );
};

export default TableRowSkeleton;
