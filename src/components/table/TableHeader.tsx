import React, { FC } from 'react';
import { ITableHeaderArray } from '../../models/ITableHeaderArray';
import { selectIsMasterCheckboxSelected, toggleMasterCheckbox } from '../../slices/fileSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';

const TableHeader: FC = () => {
  const isMasterCheckboxChecked = useAppSelector(selectIsMasterCheckboxSelected);
  const dispatch = useAppDispatch();

  const tableHeaderData: Array<ITableHeaderArray> = [
    {
      id: 0,
      content: (
        <input
          className="mx-2"
          type="checkbox"
          onChange={() => dispatch(toggleMasterCheckbox())}
          checked={isMasterCheckboxChecked}
        />
      ),
      classes: ' text-right w-1/12 h-8 '
    },
    {
      id: 1,
      content: '',
      classes: 'w-1/12'
    },
    { id: 2, content: '', classes: ' text-start w-1/3 ' },
    { id: 3, content: 'Signatures', classes: ' text-center w-1/6 ' },
    { id: 4, content: 'Version', classes: ' text-center w-1/6 ' },
    { id: 5, content: 'Updated', classes: ' text-start w-1/6 ' }
  ];

  return (
    <thead>
      <tr className="border-b">
        {tableHeaderData.map((th) => {
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
