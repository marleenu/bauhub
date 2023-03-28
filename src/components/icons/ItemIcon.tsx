import React, { FC } from 'react';
import { FileEntityType } from '../../models/FileEntityType';
import { IFile } from '../../models/IFile';
import { IFolder } from '../../models/IFolder';
import { IContainer } from '../../models/IContainer';
import { classNames } from '../../utils/utilities';
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  item: IFile | IFolder | IContainer;
  isSelected: boolean;
}
const ItemIcon: FC<Props> = ({ item, isSelected }) => {
  let classes =
    'flex select-none shadow-sm outline-white items-center text-[8px] justify-center m-2 w-8 h-8 rounded-full ';
  let content;

  const extension = item.name
    ?.substring(item.name.lastIndexOf('.') + 1)
    .toUpperCase()
    .substring(0, 5);

  switch (item.type) {
    case FileEntityType.FILE:
      classes += ' bg-gradient-to-r from-red-300 to-rose-400 text-white ';
      content = <span>{extension}</span>;
      break;
    case FileEntityType.CONTAINER:
      classes += ' bg-gradient-to-r from-sky-300 to-indigo-500 text-white ';
      content = <span>{extension}</span>;
      break;
    case FileEntityType.FOLDER:
      classes += ' text-gray-400 bg-gray-200 ';
      content = <FontAwesomeIcon icon={faFolder as IconProp} size="lg" />;
      break;
  }

  return (
    <div className={classNames(classes, isSelected && 'outline outline-2 outline-white')}>
      {content}
    </div>
  );
};

export default ItemIcon;
