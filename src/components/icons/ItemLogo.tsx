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
const ItemLogo: FC<Props> = ({ item, isSelected }) => {
  let classes = 'flex select-none items-center justify-center m-2 w-8 h-8 rounded-full ';
  let content;

  switch (item.type) {
    case FileEntityType.FILE:
      classes += ' outline-red-700 bg-gradient-to-r from-red-300 to-rose-400 text-white text-xs';
      content = <span>PDF</span>;
      break;
    case FileEntityType.CONTAINER:
      classes += ' outline-blue-800 bg-gradient-to-r from-sky-300 to-indigo-500 text-white text-xs';
      content = <span>ASICE</span>;
      break;
    case FileEntityType.FOLDER:
      classes += ' text-gray-400 outline-gray-500 ';
      classes += isSelected && ' bg-white ';
      content = <FontAwesomeIcon icon={faFolder as IconProp} size="lg" />;
      break;
  }

  return <div className={classNames(classes, isSelected && 'outline outline-2')}>{content}</div>;
};

export default ItemLogo;
