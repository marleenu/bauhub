import React, { FC } from 'react';
import { ITableHeaderArray } from '../../models/ITableHeaderArray';

interface Props {
  headerData: Array<ITableHeaderArray>;
}

const TableHeader: FC<Props> = ({ headerData }) => {
  return (
    <thead>
      <tr>
        {headerData.map((th) => {
          return (
            <th key={th.id} className={th?.classes || ''}>
              {th.content}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
